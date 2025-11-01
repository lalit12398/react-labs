# Intersection Observer (mdn)

Intersection observer API provides a way to asynchronously observe change in the target element with top level doc viewport or an ancestor element

## Why?

-   Implementing intersection detection in past involved looping through method calls or event handlers which run on the main thread
-   Hence it might block (partially or completely) the end user
-   e.g user wants to load more data on scroll. User do not know the inner working of this and since all this detection is running on main thread, it will impact the performance
-   Intersection API allows code to register a callback that executes if the target enters or exit the intersection with another element (or viewport)
-   This way, sites no longer need to do anything on the main thread to watch for this kind of element intersection, and the browser is free to optimize the management of intersections as it sees fit.

## Limit

-   Intersection API cannot trigger logic based on exact numbers of pixels that moved/overlaped

## Concept

-   Used to track element and perform actions on basis of visibility
-   Accepts Target and options (root, threshold)
-   Root: The element whose bounding box is used as the reference; null means the viewport.
-   threshold(s): One or more ratios from 0 to 1 indicating what intersection percentages should trigger the callback (e.g., 0, 0.5, 1)

## Usage

-   Lazy loading of media near/in view
-   Infinite Scroll: load more data
-   in view animations
