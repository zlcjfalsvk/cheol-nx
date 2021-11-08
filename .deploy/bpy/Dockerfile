FROM python:3.7.7-buster

# Install dependencies
RUN apt-get update && apt-get install -y \
	wget \
	libopenexr-dev \
	bzip2 \
	build-essential \
	zlib1g-dev \
	libxmu-dev \
	libxi-dev \
	libxxf86vm-dev \
	libfontconfig1 \
	libxrender1 \
	libgl1-mesa-glx \
	xz-utils

# Install Node
ENV NODE_VERSION=14.15
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# Install Blender
## Enviorment variables
### Referenced https://github.com/nytimes/rd-blender-docker

ENV LC_ALL C.UTF-8
ENV LANG C.UTF-8
ENV PATH "$PATH:/bin/2.91/python/bin/"
ENV BLENDER_PATH "/bin/2.91"
ENV BLENDERPIP "/bin/2.91/python/bin/pip3"
ENV BLENDERPY "/bin/2.91/python/bin/python3.7m"
ENV HW="CPU"

# Download and install Blender
RUN wget --no-check-certificate  https://mirror.clarkson.edu/blender/release/Blender2.91/blender-2.91.2-linux64.tar.xz \
	&& tar -xvf blender-2.91.2-linux64.tar.xz --strip-components=1 -C /bin \
	&& rm -rf blender-2.91.2-linux64.tar.xz \
	&& rm -rf blender-2.91.2-linux64

# Blender comes with a super outdated version of numpy (which is needed for matplotlib / opencv) so override it with a modern one
RUN rm -rf ${BLENDER_PATH}/python/lib/python3.7m/site-packages/numpy

# Must first ensurepip to install Blender pip3 and then new numpy
RUN ${BLENDERPY} -m ensurepip && ${BLENDERPIP} install --upgrade pip && ${BLENDERPIP} install numpy

CMD bash
