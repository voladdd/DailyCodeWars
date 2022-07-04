#!/bin/bash
echo Hello, what is a name of your kata?
read KATA_NAME
PROJECT_DIR="./katas/$KATA_NAME"
mkdir "$PROJECT_DIR"
touch "$PROJECT_DIR/solution.js" && touch "$PROJECT_DIR/test.js"
