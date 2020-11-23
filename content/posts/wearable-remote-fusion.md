---
title: Wearable Remote Fusion
subtitle: Live remote collaboration system
category:
  - Research
author: Prasanth Sasikumar
date: 2019-10-24T03:45:48.297Z
featureImage: /uploads/2019ismarsystem.png
---
A wide variety of communication cues are used in face-to-face collaboration, such as audio (e.g., speech, para-linguistic), visual(e.g., gaze, gesture, facial expression), and environmental information (e.g., object manipulation, writing/drawing). Many natural interaction methods use these cues, providing more efficient communication and better mutual understanding. However, most current remote collaboration technologies cannot convey these communication cues and are often limited to simple audio and visual streaming and sharing. The use of Head-Mounted Displays (HMDs) with Mixed Reality(MR) technology creates the possibility of having a more immersive collaboration experience. Different MR remote collaboration systems tried improving system usability by capturing more information on the local scene and increasing interaction and communication cues. However, these systems still have many limitations, like the low update rate of the 3D mesh or the small field of view and interactive volume.

We developed an MR remote collaboration system named Wearable RemoteFusion for live streaming a3D model of a local user’s environment in a large scale workspace to address these issues. In our system, a dense live scene is constructed on-the-fly by stitch-ing 3D point-cloud inputs from multiple depth sensors based on color and depth frames. You can see how we used four intel Realsense cameras to re-create a table in the image below. The green blobs represent cameras.

![We used four intel Realsense cameras to re-create a table. The green blobs represent cameras.](/uploads/livescenestiching.jpg "Reconstructed Table")

Any changes in the local environment can be updated to the remote user in real-time in 3D. We also enhance the remote communication by sharing the local user’s eye gaze cues with the remote user and hand gestures from the remote user back to the local user (Figure below).

![](/uploads/2019ismarsystem.png)

We presented Wearable RemoteFusion, a remote collaboration system that supports spatial annotation and view frustum sharing along with natural non-verbal communication cues (eye gaze and hand gesture). We conducted a user study to investigate the benefits of providing natural communication cues during a collaboration task compared to the controller and annotation-based cues. With our system, the results showed that participants had a stronger feeling of Co-presence above average, and the remote user had less physical workload. We discuss implications for collaborative interface design and directions for future research on the paper. The main takeaway from this research was:

* Participants prefer natural communication cues over device-centric cues for remote collaboration involving pick and place tasks.
* Gain insights on how to reconstruct surroundings using point cloud and synchronize local and remote worlds.

You can read more about the paper here: <https://doi.org/10.1109/ISMAR-Adjunct.2019.000-3>

Here is a working video: <https://www.youtube.com/embed/Rr457qBQB5A>



