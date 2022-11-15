# Kalidokit

## Description

Kalidokit+Mediapipe+Three.js: position tracking demo

- Both Holistic and Pose APIs are in the code uncomment the one you want to use
- Lower the camera's resolution for higher fps.
- Mediapipe Holistic/Pose Javascript APIs are the source of an important fps drop on mobile phone. Tested on iPhone 14 Pro and iPhone 13 pro, my fps were between 2 and 10 at best.

https://user-images.githubusercontent.com/4311684/202046010-4dd22f0d-b4e0-4168-b86f-e6dcc0f9981d.mp4


## Setup

Run the following commands:

```bash
# Install dependencies (only the first time)
yarn

# Run the local server at localhost:8080
yarn dev

# Run the local server at your public IP address
yarn dev --host

# Build for production in the dist/ directory
yarn build
```
