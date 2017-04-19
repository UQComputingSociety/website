#!/usr/bin/env bash

docker pull jekyll/builder
docker run --rm --name jekyll -v `pwd`:/srv/jekyll -it -p 0.0.0.0:4000:4000 jekyll/builder jekyll build
