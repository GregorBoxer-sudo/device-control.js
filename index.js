/*----------------------------------*/
/* Copyright 2022 Gregor Katzschner */
/*----------------------------------*/

import os from "os";
import childProcess from "child_process";

function shutdown() {
    if (os.platform() === 'win32') {
        childProcess.execSync('shutdown -s -t 0')
    } else if (os.platform() === 'darwin') {
        childProcess.execSync('shutdown -h now');
    } else if (os.platform() === 'linux') {
        childProcess.execSync('shutdown -h now');
    } else {
        throw new Error('Unsupported platform')
    }
}

function reboot() {
    if (os.platform() === 'win32') {
        childProcess.execSync('shutdown -r -t 0')
    } else if (os.platform() === 'darwin') {
        childProcess.execSync('shutdown -r now');
    } else if (os.platform() === 'linux') {
        childProcess.execSync('shutdown -r now');
    } else {
        throw new Error('Unsupported platform');
    }
}

function sleep() {
    if (os.platform() === 'win32') {
        childProcess.execSync('shutdown -s -t 0')
    } else if (os.platform() === 'darwin') {
        childProcess.execSync('shutdown -h now');
    } else if (os.platform() === 'linux') {
        childProcess.execSync('shutdown -h now');
    } else {
        throw new Error('Unsupported platform');
    }
}

export { shutdown, reboot, sleep };