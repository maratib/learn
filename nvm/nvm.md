# NVM 

```bash
# check version
node -v || node --version

# Installing NVM without root access

# Set default node version on a shell
nvm alias default 8.1.0

# Always default to the latest available node version on a shell
nvm alias default node

# Install the latest available version
nvm install node

# Use the latest version
nvm use node

# Install the latest LTS version
nvm install --lts

# Use the latest LTS version
nvm use --lts


# list locally installed versions of node
nvm ls

# list remove available versions of node
nvm ls-remote

# install specific version of node
nvm install 18.16.1

# switch version of node
nvm use 20.5.1

# set default version of node
nvm alias default 18.16.1


# install latest LTS version of node (Long Term Support)
nvm install --lts

# install latest stable version of node
nvm install stable

```