FROM php:7.1-apache

ARG USER_ID=1000
ARG GROUP_ID=1000
ARG USER_NAME=vkr
ARG GROUP_NAME=vkr
ARG FRONTEND_DOMAIN
ENV HOME_DIR /var/www

RUN apt-get update && apt-get install -y \
    sudo \
    curl \
    apt-transport-https

# Install Node & Yarn
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

RUN \
    apt-get update && \
    apt-get install -y \
    nodejs \
    yarn

# System configuration
RUN echo "%${GROUP_NAME}   ALL=(ALL:ALL) NOPASSWD:ALL" >> /etc/sudoers

# Apache configuration
RUN a2enmod rewrite

RUN echo "\
    <VirtualHost *:80>\n\
        ServerName api\n\
        ServerAlias ${FRONTEND_DOMAIN}\n\
        DocumentRoot \"/var/www/public\"\n\
        <Directory \"/var/www\">\n\
            Options ExecCGI FollowSymLinks\n\
            AllowOverride all\n\
            Allow from all\n\
            Order allow,deny\n\
            Require all granted\n\
            AddHandler cgi-script .cgi\n\
            AddHandler fastcgi-script .fcgi\n\
        </Directory>\n\
    </VirtualHost>\
    " | tee -a /etc/apache2/sites-available/frontend.conf

RUN a2ensite frontend

# Configuring environment
RUN addgroup --gid ${GROUP_ID} ${GROUP_NAME} && \
    adduser \
    --uid ${USER_ID} \
    --gid ${GROUP_ID} \
    --home ${HOME_DIR} \
    --disabled-password \
    --no-create-home \
    --gecos '' ${USER_NAME}

RUN chown ${USER_NAME}:${GROUP_NAME} -R ${HOME_DIR}

USER ${USER_NAME}

WORKDIR ${HOME_DIR}

COPY ./DockerEntrypoint.sh /DockerEntrypoint.sh
ENTRYPOINT /DockerEntrypoint.sh
