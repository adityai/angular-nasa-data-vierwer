FROM selenium/node-chrome-debug

WORKDIR /home/seluser

ADD . /home/seluser

RUN sudo apt-get update -y && sudo apt-get install -y nodejs npm
RUN sudo apt-get autoremove -y && sudo apt-get clean -y
RUN npm install
ENTRYPOINT "npm test"


