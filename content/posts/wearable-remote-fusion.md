---
title: Wearable Remote Fusion
subtitle: Live remote collaboration system
category:
  - Research
author: Prasanth Sasikumar
date: 2019-10-24T03:45:48.297Z
featureImage: uploads/2019ismarsystem.png
---
We present a wearable Mixed Reality (MR) remote collaborationsystem -
 Wearable RemoteFusion. The system supports spatialannotation and view frustum sharing, and enables natural non-verbalcommunication cues (eye gaze and hand gesture) for visual assis-tance in a stitched live dense scene. We describe the design andimplementation details of the prototype system, and report on apilot user study investigating how sharing natural gaze and gesturecues affects collaborative performance and the user experience. Wefound that by sharing augmented natural cues like the local eyegaze and remote hand gesture, participants had a stronger feelingof Co-presence, and the remote user could guide the local user tocomplete tasks with less physical workload. We discuss implicationsfor collaborative interface design and directions for future research.

![We used four intel Realsense cameras to re-create a table. The green blobs represent cameras.](uploads/livescenestiching.jpg "Reconstructed Table")

A wide variety of communication cues are used in face-to-facecollaboration, such as audio (e.g., speech, para-linguistic), visual(e.g., gaze, gesture, facial expression), and environmental infor-mation (e.g., object manipulation, writing/drawing). Many naturalinteraction methods use these cues, providing more efficient com-munication and better mutual understanding. However, most currentremote collaboration technologies cannot convey all of these com-munication cues, and are often limited to simple audio and visualstreaming and sharing.The use of Head Mounted Displays (HMDs) with Mixed Reality(MR) technology creates the possibility of having a more immer-sive collaboration experience. Different MR remote collaborationsystems \[3] tried improving system usability by capturing moreinformation on the local scene and increasing interaction and com-munication cues. However, these systems still have many limitations,like the low update rate of the 3D mesh, or the small field of viewand interactive volume.To address these issues, we have developed an MR remote collab-oration system named Wearable RemoteFusion for live streaming a3D model of a local user’s environment in a large scale workspace.In our system, a live dense scene is constructed on-the-fly by stitch-ing 3D point-cloud inputs from multiple depth sensors based oncolor and depth frames. Any changes in the local environment canbe updated to the remote user in real time in 3D. We also enhance the remote communication by sharing the local user’s eye gaze cueswith the remote user, as well as hand gestures from the remote userback to the local user (Figure 1 Middle, Right).



### Conclusion

We presented Wearable RemoteFusion, a remote collaboration sys-tem that supports spatial annotation and view frustum sharing alongwith natural non-verbal communication cues (eye gaze and handgesture). We conducted a user study to investigate the benefits ofproviding natural communication cues during a collaboration taskcompared to controller and annotation based cues. With our sys-tem, the results showed that participants had a stronger feeling ofCo-presence above average, and the remote user had less physicalworkload as well. In the future, we want to extend the 3D recon-struction scale from the workspace to the room size. We also plan toenable object segmentation in the dense scene, which could result ina more intelligent guidance process.