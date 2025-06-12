#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.4),
    on 六月 01, 2025, at 19:54
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.4'
expName = 'untitled'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = (1024, 768)
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\ww2001\\Desktop\\实验\\untitled_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    # Setup iohub experiment
    ioConfig['Experiment'] = dict(filename=thisExp.dataFileName)
    
    # Start ioHub server
    ioServer = io.launchHubServer(window=win, **ioConfig)
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    if deviceManager.getDevice('key_resp') is None:
        # initialise key_resp
        key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp',
        )
    # create speaker 'sound_apple0'
    deviceManager.addDevice(
        deviceName='sound_apple0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_apple0') is None:
        # initialise key_resp_apple0
        key_resp_apple0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_apple0',
        )
    # create speaker 'sound_apple1'
    deviceManager.addDevice(
        deviceName='sound_apple1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_apple1') is None:
        # initialise key_resp_apple1
        key_resp_apple1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_apple1',
        )
    # create speaker 'sound_xiaomi1'
    deviceManager.addDevice(
        deviceName='sound_xiaomi1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_xiaomi1') is None:
        # initialise key_resp_xiaomi1
        key_resp_xiaomi1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_xiaomi1',
        )
    # create speaker 'sound_xiaomi0'
    deviceManager.addDevice(
        deviceName='sound_xiaomi0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_xiaomi0') is None:
        # initialise key_xiaomi0
        key_xiaomi0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_xiaomi0',
        )
    # create speaker 'sound_zhuozi'
    deviceManager.addDevice(
        deviceName='sound_zhuozi',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_zhuozi') is None:
        # initialise key_resp_zhuozi
        key_resp_zhuozi = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_zhuozi',
        )
    # create speaker 'sound_qingshu0'
    deviceManager.addDevice(
        deviceName='sound_qingshu0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_2qingshu0') is None:
        # initialise key_resp_2qingshu0
        key_resp_2qingshu0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_2qingshu0',
        )
    if deviceManager.getDevice('key_resp_weicheng1') is None:
        # initialise key_resp_weicheng1
        key_resp_weicheng1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_weicheng1',
        )
    # create speaker 'sound_hongniu0'
    deviceManager.addDevice(
        deviceName='sound_hongniu0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_hongniu0') is None:
        # initialise key_resp_hongniu0
        key_resp_hongniu0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_hongniu0',
        )
    # create speaker 'sound_ruodian1'
    deviceManager.addDevice(
        deviceName='sound_ruodian1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_ruodian1') is None:
        # initialise key_resp_ruodian1
        key_resp_ruodian1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_ruodian1',
        )
    # create speaker 'sound_leshi0'
    deviceManager.addDevice(
        deviceName='sound_leshi0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_leshi0') is None:
        # initialise key_resp_leshi0
        key_resp_leshi0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_leshi0',
        )
    # create speaker 'sound_hongqi1'
    deviceManager.addDevice(
        deviceName='sound_hongqi1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_hongqi1') is None:
        # initialise key_resp_hongqi1
        key_resp_hongqi1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_hongqi1',
        )
    # create speaker 'sound_nanhai1'
    deviceManager.addDevice(
        deviceName='sound_nanhai1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_2') is None:
        # initialise key_resp_2
        key_resp_2 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_2',
        )
    # create speaker 'sound_qingshu1'
    deviceManager.addDevice(
        deviceName='sound_qingshu1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_3') is None:
        # initialise key_resp_3
        key_resp_3 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_3',
        )
    # create speaker 'sound_nvhai1'
    deviceManager.addDevice(
        deviceName='sound_nvhai1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_nvhai1') is None:
        # initialise key_resp_nvhai1
        key_resp_nvhai1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_nvhai1',
        )
    # create speaker 'sound_baoma1'
    deviceManager.addDevice(
        deviceName='sound_baoma1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_baoma1') is None:
        # initialise key_resp_baoma1
        key_resp_baoma1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_baoma1',
        )
    if deviceManager.getDevice('key_resp_jiaofu0') is None:
        # initialise key_resp_jiaofu0
        key_resp_jiaofu0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_jiaofu0',
        )
    # create speaker 'sound_yintian0'
    deviceManager.addDevice(
        deviceName='sound_yintian0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_yintian0') is None:
        # initialise key_resp_yintian0
        key_resp_yintian0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_yintian0',
        )
    # create speaker 'sound_chaguan0'
    deviceManager.addDevice(
        deviceName='sound_chaguan0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_chaguan0') is None:
        # initialise key_resp_chaguan0
        key_resp_chaguan0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_chaguan0',
        )
    # create speaker 'sound_baixiang0'
    deviceManager.addDevice(
        deviceName='sound_baixiang0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_baixiang0') is None:
        # initialise key_resp_baixiang0
        key_resp_baixiang0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_baixiang0',
        )
    # create speaker 'sound_sinian1'
    deviceManager.addDevice(
        deviceName='sound_sinian1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_sinian1') is None:
        # initialise key_resp_sinian1
        key_resp_sinian1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_sinian1',
        )
    # create speaker 'sound_sinian'
    deviceManager.addDevice(
        deviceName='sound_sinian',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_sinian0') is None:
        # initialise key_resp_sinian0
        key_resp_sinian0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_sinian0',
        )
    # create speaker 'sound_yongqi0'
    deviceManager.addDevice(
        deviceName='sound_yongqi0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_yongqi0') is None:
        # initialise key_resp_yongqi0
        key_resp_yongqi0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_yongqi0',
        )
    # create speaker 'sound_fuqin0'
    deviceManager.addDevice(
        deviceName='sound_fuqin0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_fuqin0') is None:
        # initialise key_resp_fuqin0
        key_resp_fuqin0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_fuqin0',
        )
    # create speaker 'sound_guangming1'
    deviceManager.addDevice(
        deviceName='sound_guangming1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_光明1') is None:
        # initialise key_resp_光明1
        key_resp_光明1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_光明1',
        )
    # create speaker 'sound_baimao0'
    deviceManager.addDevice(
        deviceName='sound_baimao0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_baimao0') is None:
        # initialise key_resp_baimao0
        key_resp_baimao0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_baimao0',
        )
    # create speaker 'sound_xiongdi1'
    deviceManager.addDevice(
        deviceName='sound_xiongdi1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_xiongdi1') is None:
        # initialise key_resp_xiongdi1
        key_resp_xiongdi1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_xiongdi1',
        )
    # create speaker 'sound_lianxiang1'
    deviceManager.addDevice(
        deviceName='sound_lianxiang1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_lianxiang1') is None:
        # initialise key_resp_lianxiang1
        key_resp_lianxiang1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_lianxiang1',
        )
    # create speaker 'sound_chaguan1'
    deviceManager.addDevice(
        deviceName='sound_chaguan1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_chaguan1') is None:
        # initialise key_resp_chaguan1
        key_resp_chaguan1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_chaguan1',
        )
    # create speaker 'sound_nanhai0'
    deviceManager.addDevice(
        deviceName='sound_nanhai0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_nanhai0') is None:
        # initialise key_resp_nanhai0
        key_resp_nanhai0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_nanhai0',
        )
    # create speaker 'sound_baimao1'
    deviceManager.addDevice(
        deviceName='sound_baimao1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_baimao1') is None:
        # initialise key_resp_baimao1
        key_resp_baimao1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_baimao1',
        )
    # create speaker 'sound_yanjing'
    deviceManager.addDevice(
        deviceName='sound_yanjing',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_yanjing') is None:
        # initialise key_resp_yanjing
        key_resp_yanjing = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_yanjing',
        )
    # create speaker 'sound_qingfeng1'
    deviceManager.addDevice(
        deviceName='sound_qingfeng1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_qingfeng1') is None:
        # initialise key_resp_qingfeng1
        key_resp_qingfeng1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_qingfeng1',
        )
    if deviceManager.getDevice('key_resp_luotuo1') is None:
        # initialise key_resp_luotuo1
        key_resp_luotuo1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_luotuo1',
        )
    # create speaker 'sound_fuqin1'
    deviceManager.addDevice(
        deviceName='sound_fuqin1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_fuqin1') is None:
        # initialise key_resp_fuqin1
        key_resp_fuqin1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_fuqin1',
        )
    if deviceManager.getDevice('key_resp_luotuo0') is None:
        # initialise key_resp_luotuo0
        key_resp_luotuo0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_luotuo0',
        )
    if deviceManager.getDevice('key_resp_weicheng0') is None:
        # initialise key_resp_weicheng0
        key_resp_weicheng0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_weicheng0',
        )
    # create speaker 'sound_chuanghu'
    deviceManager.addDevice(
        deviceName='sound_chuanghu',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_chuanghu') is None:
        # initialise key_resp_chuanghu
        key_resp_chuanghu = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_chuanghu',
        )
    # create speaker 'sound_dazhong1'
    deviceManager.addDevice(
        deviceName='sound_dazhong1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_dazhong1') is None:
        # initialise key_resp_dazhong1
        key_resp_dazhong1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_dazhong1',
        )
    # create speaker 'sound_qingfeng0'
    deviceManager.addDevice(
        deviceName='sound_qingfeng0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_qingfeng0') is None:
        # initialise key_resp_qingfeng0
        key_resp_qingfeng0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_qingfeng0',
        )
    # create speaker 'sound_mutou'
    deviceManager.addDevice(
        deviceName='sound_mutou',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_mutou') is None:
        # initialise key_resp_mutou
        key_resp_mutou = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_mutou',
        )
    # create speaker 'sound_fangjian'
    deviceManager.addDevice(
        deviceName='sound_fangjian',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_fangjian') is None:
        # initialise key_resp_fangjian
        key_resp_fangjian = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_fangjian',
        )
    # create speaker 'sound_huahi1'
    deviceManager.addDevice(
        deviceName='sound_huahi1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_huahai1') is None:
        # initialise key_resp_huahai1
        key_resp_huahai1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_huahai1',
        )
    # create speaker 'sound_lixiang0'
    deviceManager.addDevice(
        deviceName='sound_lixiang0',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_lixiang0') is None:
        # initialise key_resp_lixiang0
        key_resp_lixiang0 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_lixiang0',
        )
    if deviceManager.getDevice('key_resp_heimei1') is None:
        # initialise key_resp_heimei1
        key_resp_heimei1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_heimei1',
        )
    # create speaker 'sound_yintian1'
    deviceManager.addDevice(
        deviceName='sound_yintian1',
        deviceClass='psychopy.hardware.speaker.SpeakerDevice',
        index=-1
    )
    if deviceManager.getDevice('key_resp_yintian1') is None:
        # initialise key_resp_yintian1
        key_resp_yintian1 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_yintian1',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "Introductions" ---
    introductions = visual.TextStim(win=win, name='introductions',
        text='请仔细听句子\n判断目标词\n 普通名词（按←）\n 专有名词（按→）',
        font='SimHei',
        units='height', pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp = keyboard.Keyboard(deviceName='key_resp')
    
    # --- Initialize components for Routine "trialapple0" ---
    text_apple0 = visual.TextStim(win=win, name='text_apple0',
        text='苹果',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_apple0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_apple0',    name='sound_apple0'
    )
    sound_apple0.setVolume(1.0)
    text = visual.TextStim(win=win, name='text',
        text='请听句子...',
        font='Simhei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_2 = visual.TextStim(win=win, name='text_2',
        text='普通名词“←”\n专有名词“→”',
        font='Simhei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_apple0 = keyboard.Keyboard(deviceName='key_resp_apple0')
    
    # --- Initialize components for Routine "trialapple1" ---
    text_apple1 = visual.TextStim(win=win, name='text_apple1',
        text='苹果',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_apple1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_apple1',    name='sound_apple1'
    )
    sound_apple1.setVolume(1.0)
    text_3 = visual.TextStim(win=win, name='text_3',
        text='请听句子...',
        font='Simhei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_4 = visual.TextStim(win=win, name='text_4',
        text='普通名词“←”\n专有名词“→”',
        font='Simhei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_apple1 = keyboard.Keyboard(deviceName='key_resp_apple1')
    
    # --- Initialize components for Routine "trialxiaomi1" ---
    text_xiaomi1 = visual.TextStim(win=win, name='text_xiaomi1',
        text='小米',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_xiaomi1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_xiaomi1',    name='sound_xiaomi1'
    )
    sound_xiaomi1.setVolume(1.0)
    text_5 = visual.TextStim(win=win, name='text_5',
        text='请听句子...',
        font='Simhei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_6 = visual.TextStim(win=win, name='text_6',
        text='普通名词“←”\n专有名词“→”',
        font='Simhei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_xiaomi1 = keyboard.Keyboard(deviceName='key_resp_xiaomi1')
    
    # --- Initialize components for Routine "trialxiaomi0" ---
    text_xiaomi0 = visual.TextStim(win=win, name='text_xiaomi0',
        text='小米',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_xiaomi0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_xiaomi0',    name='sound_xiaomi0'
    )
    sound_xiaomi0.setVolume(1.0)
    text_9 = visual.TextStim(win=win, name='text_9',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_10 = visual.TextStim(win=win, name='text_10',
        text='普通名词“←”\n专有名词“→”',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_xiaomi0 = keyboard.Keyboard(deviceName='key_xiaomi0')
    
    # --- Initialize components for Routine "trialzhuozi" ---
    text_zhuozi = visual.TextStim(win=win, name='text_zhuozi',
        text='桌子',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_zhuozi = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_zhuozi',    name='sound_zhuozi'
    )
    sound_zhuozi.setVolume(1.0)
    text_7 = visual.TextStim(win=win, name='text_7',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_8 = visual.TextStim(win=win, name='text_8',
        text='普通名词“←”\n专有名词“→”',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_zhuozi = keyboard.Keyboard(deviceName='key_resp_zhuozi')
    
    # --- Initialize components for Routine "trialqingshu0" ---
    text_qingshu0 = visual.TextStim(win=win, name='text_qingshu0',
        text='情书',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_qingshu0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_qingshu0',    name='sound_qingshu0'
    )
    sound_qingshu0.setVolume(1.0)
    text_11 = visual.TextStim(win=win, name='text_11',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_12 = visual.TextStim(win=win, name='text_12',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_2qingshu0 = keyboard.Keyboard(deviceName='key_resp_2qingshu0')
    
    # --- Initialize components for Routine "trialweicheng1" ---
    text_weicheng1 = visual.TextStim(win=win, name='text_weicheng1',
        text='围城',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_13 = visual.TextStim(win=win, name='text_13',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_14 = visual.TextStim(win=win, name='text_14',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp_weicheng1 = keyboard.Keyboard(deviceName='key_resp_weicheng1')
    
    # --- Initialize components for Routine "trialhongniu0" ---
    text_hongniu0 = visual.TextStim(win=win, name='text_hongniu0',
        text='红牛',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_hongniu0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_hongniu0',    name='sound_hongniu0'
    )
    sound_hongniu0.setVolume(1.0)
    text_15 = visual.TextStim(win=win, name='text_15',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_16 = visual.TextStim(win=win, name='text_16',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_hongniu0 = keyboard.Keyboard(deviceName='key_resp_hongniu0')
    
    # --- Initialize components for Routine "trialruodian1" ---
    text_ruodian1 = visual.TextStim(win=win, name='text_ruodian1',
        text='弱点',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_ruodian1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_ruodian1',    name='sound_ruodian1'
    )
    sound_ruodian1.setVolume(1.0)
    text_19 = visual.TextStim(win=win, name='text_19',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_20 = visual.TextStim(win=win, name='text_20',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_ruodian1 = keyboard.Keyboard(deviceName='key_resp_ruodian1')
    
    # --- Initialize components for Routine "trialleshi0_3" ---
    leshi0 = visual.TextStim(win=win, name='leshi0',
        text='乐事',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_leshi0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_leshi0',    name='sound_leshi0'
    )
    sound_leshi0.setVolume(1.0)
    text1_leshi0 = visual.TextStim(win=win, name='text1_leshi0',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_17 = visual.TextStim(win=win, name='text_17',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_leshi0 = keyboard.Keyboard(deviceName='key_resp_leshi0')
    
    # --- Initialize components for Routine "trialhongqi1" ---
    text_hongqi1 = visual.TextStim(win=win, name='text_hongqi1',
        text='红旗',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_hongqi1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_hongqi1',    name='sound_hongqi1'
    )
    sound_hongqi1.setVolume(1.0)
    text_1ruodian1 = visual.TextStim(win=win, name='text_1ruodian1',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_18 = visual.TextStim(win=win, name='text_18',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_hongqi1 = keyboard.Keyboard(deviceName='key_resp_hongqi1')
    
    # --- Initialize components for Routine "trialnanhai1" ---
    text_nanhai1 = visual.TextStim(win=win, name='text_nanhai1',
        text='男孩',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_nanhai1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_nanhai1',    name='sound_nanhai1'
    )
    sound_nanhai1.setVolume(1.0)
    text_21 = visual.TextStim(win=win, name='text_21',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_22 = visual.TextStim(win=win, name='text_22',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_2 = keyboard.Keyboard(deviceName='key_resp_2')
    
    # --- Initialize components for Routine "trialqingshu1" ---
    text_qingshu1 = visual.TextStim(win=win, name='text_qingshu1',
        text='情书',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_qingshu1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_qingshu1',    name='sound_qingshu1'
    )
    sound_qingshu1.setVolume(1.0)
    text_23 = visual.TextStim(win=win, name='text_23',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_24 = visual.TextStim(win=win, name='text_24',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_3 = keyboard.Keyboard(deviceName='key_resp_3')
    
    # --- Initialize components for Routine "trialnvhai1" ---
    text_nvhai1 = visual.TextStim(win=win, name='text_nvhai1',
        text='女孩',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_nvhai1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_nvhai1',    name='sound_nvhai1'
    )
    sound_nvhai1.setVolume(1.0)
    text_25 = visual.TextStim(win=win, name='text_25',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_26 = visual.TextStim(win=win, name='text_26',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_nvhai1 = keyboard.Keyboard(deviceName='key_resp_nvhai1')
    
    # --- Initialize components for Routine "trialbaoma1" ---
    text_baoma1 = visual.TextStim(win=win, name='text_baoma1',
        text='宝马',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_baoma1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_baoma1',    name='sound_baoma1'
    )
    sound_baoma1.setVolume(1.0)
    text_27 = visual.TextStim(win=win, name='text_27',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_28 = visual.TextStim(win=win, name='text_28',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_baoma1 = keyboard.Keyboard(deviceName='key_resp_baoma1')
    
    # --- Initialize components for Routine "trialjiaofu0" ---
    text_jiaofu0 = visual.TextStim(win=win, name='text_jiaofu0',
        text='教父',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_29 = visual.TextStim(win=win, name='text_29',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_30 = visual.TextStim(win=win, name='text_30',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp_jiaofu0 = keyboard.Keyboard(deviceName='key_resp_jiaofu0')
    
    # --- Initialize components for Routine "trialbaixiang1_3" ---
    
    # --- Initialize components for Routine "trialyintian0" ---
    text_yintian0 = visual.TextStim(win=win, name='text_yintian0',
        text='阴天',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_yintian0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_yintian0',    name='sound_yintian0'
    )
    sound_yintian0.setVolume(1.0)
    text_33 = visual.TextStim(win=win, name='text_33',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_34 = visual.TextStim(win=win, name='text_34',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_yintian0 = keyboard.Keyboard(deviceName='key_resp_yintian0')
    
    # --- Initialize components for Routine "trialchaguan0" ---
    text_chaguan0 = visual.TextStim(win=win, name='text_chaguan0',
        text='茶馆',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_chaguan0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_chaguan0',    name='sound_chaguan0'
    )
    sound_chaguan0.setVolume(1.0)
    text_35 = visual.TextStim(win=win, name='text_35',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_36 = visual.TextStim(win=win, name='text_36',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_chaguan0 = keyboard.Keyboard(deviceName='key_resp_chaguan0')
    
    # --- Initialize components for Routine "trialbaixiang0" ---
    text_baixiang0 = visual.TextStim(win=win, name='text_baixiang0',
        text='白象',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_baixiang0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_baixiang0',    name='sound_baixiang0'
    )
    sound_baixiang0.setVolume(1.0)
    text_37 = visual.TextStim(win=win, name='text_37',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_38 = visual.TextStim(win=win, name='text_38',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_baixiang0 = keyboard.Keyboard(deviceName='key_resp_baixiang0')
    
    # --- Initialize components for Routine "trialsinian1" ---
    text_sinian1 = visual.TextStim(win=win, name='text_sinian1',
        text='思念',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_sinian1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_sinian1',    name='sound_sinian1'
    )
    sound_sinian1.setVolume(1.0)
    text_39 = visual.TextStim(win=win, name='text_39',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_40 = visual.TextStim(win=win, name='text_40',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_sinian1 = keyboard.Keyboard(deviceName='key_resp_sinian1')
    
    # --- Initialize components for Routine "trialsinian0" ---
    text_sinian0 = visual.TextStim(win=win, name='text_sinian0',
        text='思念',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_sinian = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_sinian',    name='sound_sinian'
    )
    sound_sinian.setVolume(1.0)
    text_41 = visual.TextStim(win=win, name='text_41',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_42 = visual.TextStim(win=win, name='text_42',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_sinian0 = keyboard.Keyboard(deviceName='key_resp_sinian0')
    
    # --- Initialize components for Routine "trialyongqi0" ---
    text_yongqi0 = visual.TextStim(win=win, name='text_yongqi0',
        text='勇气',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_yongqi0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_yongqi0',    name='sound_yongqi0'
    )
    sound_yongqi0.setVolume(1.0)
    text_43 = visual.TextStim(win=win, name='text_43',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_44 = visual.TextStim(win=win, name='text_44',
        text='普通名词“←”\n专有名词“→',
        font='SimHel',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_yongqi0 = keyboard.Keyboard(deviceName='key_resp_yongqi0')
    
    # --- Initialize components for Routine "trialfuqin0" ---
    text_fuqin0 = visual.TextStim(win=win, name='text_fuqin0',
        text='父亲',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_fuqin0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_fuqin0',    name='sound_fuqin0'
    )
    sound_fuqin0.setVolume(1.0)
    text_45 = visual.TextStim(win=win, name='text_45',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_46 = visual.TextStim(win=win, name='text_46',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_fuqin0 = keyboard.Keyboard(deviceName='key_resp_fuqin0')
    
    # --- Initialize components for Routine "trialguangming1" ---
    text_guangming1 = visual.TextStim(win=win, name='text_guangming1',
        text='光明',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_guangming1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_guangming1',    name='sound_guangming1'
    )
    sound_guangming1.setVolume(1.0)
    text_47 = visual.TextStim(win=win, name='text_47',
        text='请听句子...',
        font='SImHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_48 = visual.TextStim(win=win, name='text_48',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_光明1 = keyboard.Keyboard(deviceName='key_resp_光明1')
    
    # --- Initialize components for Routine "trialbaimao0" ---
    text_baimao0 = visual.TextStim(win=win, name='text_baimao0',
        text='白猫',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_baimao0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_baimao0',    name='sound_baimao0'
    )
    sound_baimao0.setVolume(1.0)
    text_49 = visual.TextStim(win=win, name='text_49',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_50 = visual.TextStim(win=win, name='text_50',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_baimao0 = keyboard.Keyboard(deviceName='key_resp_baimao0')
    
    # --- Initialize components for Routine "trialxiongdi1" ---
    text_xiongdi1 = visual.TextStim(win=win, name='text_xiongdi1',
        text='兄弟',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_xiongdi1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_xiongdi1',    name='sound_xiongdi1'
    )
    sound_xiongdi1.setVolume(1.0)
    text_51 = visual.TextStim(win=win, name='text_51',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_52 = visual.TextStim(win=win, name='text_52',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_xiongdi1 = keyboard.Keyboard(deviceName='key_resp_xiongdi1')
    
    # --- Initialize components for Routine "triallianxiang1" ---
    text_lianxiang1 = visual.TextStim(win=win, name='text_lianxiang1',
        text='联想',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_lianxiang1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_lianxiang1',    name='sound_lianxiang1'
    )
    sound_lianxiang1.setVolume(1.0)
    text_53 = visual.TextStim(win=win, name='text_53',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_54 = visual.TextStim(win=win, name='text_54',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_lianxiang1 = keyboard.Keyboard(deviceName='key_resp_lianxiang1')
    
    # --- Initialize components for Routine "trialchaguan1" ---
    text_chaguan1 = visual.TextStim(win=win, name='text_chaguan1',
        text='茶馆',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_chaguan1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_chaguan1',    name='sound_chaguan1'
    )
    sound_chaguan1.setVolume(1.0)
    text_55 = visual.TextStim(win=win, name='text_55',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_56 = visual.TextStim(win=win, name='text_56',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_chaguan1 = keyboard.Keyboard(deviceName='key_resp_chaguan1')
    
    # --- Initialize components for Routine "trialnanhai0" ---
    text_nanhai0 = visual.TextStim(win=win, name='text_nanhai0',
        text='男孩',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_nanhai0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_nanhai0',    name='sound_nanhai0'
    )
    sound_nanhai0.setVolume(1.0)
    text_57 = visual.TextStim(win=win, name='text_57',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_58 = visual.TextStim(win=win, name='text_58',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_nanhai0 = keyboard.Keyboard(deviceName='key_resp_nanhai0')
    
    # --- Initialize components for Routine "trialbaimao1" ---
    text_baimao1 = visual.TextStim(win=win, name='text_baimao1',
        text='白猫',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_baimao1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_baimao1',    name='sound_baimao1'
    )
    sound_baimao1.setVolume(1.0)
    text_59 = visual.TextStim(win=win, name='text_59',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_60 = visual.TextStim(win=win, name='text_60',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_baimao1 = keyboard.Keyboard(deviceName='key_resp_baimao1')
    
    # --- Initialize components for Routine "trialyanjing" ---
    text_yanjing = visual.TextStim(win=win, name='text_yanjing',
        text='眼睛',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_yanjing = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_yanjing',    name='sound_yanjing'
    )
    sound_yanjing.setVolume(1.0)
    text_61 = visual.TextStim(win=win, name='text_61',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_62 = visual.TextStim(win=win, name='text_62',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_yanjing = keyboard.Keyboard(deviceName='key_resp_yanjing')
    
    # --- Initialize components for Routine "trialqingfeng1" ---
    text_qingfeng1 = visual.TextStim(win=win, name='text_qingfeng1',
        text='清风',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_qingfeng1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_qingfeng1',    name='sound_qingfeng1'
    )
    sound_qingfeng1.setVolume(1.0)
    text_63 = visual.TextStim(win=win, name='text_63',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_64 = visual.TextStim(win=win, name='text_64',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_qingfeng1 = keyboard.Keyboard(deviceName='key_resp_qingfeng1')
    
    # --- Initialize components for Routine "trialluotuo1" ---
    text_luotuo1 = visual.TextStim(win=win, name='text_luotuo1',
        text='骆驼',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_65 = visual.TextStim(win=win, name='text_65',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_66 = visual.TextStim(win=win, name='text_66',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp_luotuo1 = keyboard.Keyboard(deviceName='key_resp_luotuo1')
    
    # --- Initialize components for Routine "trialfuqin1" ---
    text_fuqin1 = visual.TextStim(win=win, name='text_fuqin1',
        text='父亲',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_fuqin1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_fuqin1',    name='sound_fuqin1'
    )
    sound_fuqin1.setVolume(1.0)
    text_67 = visual.TextStim(win=win, name='text_67',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_68 = visual.TextStim(win=win, name='text_68',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_fuqin1 = keyboard.Keyboard(deviceName='key_resp_fuqin1')
    
    # --- Initialize components for Routine "trialluotuo0" ---
    text_luotuo0 = visual.TextStim(win=win, name='text_luotuo0',
        text='骆驼',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_69 = visual.TextStim(win=win, name='text_69',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_70 = visual.TextStim(win=win, name='text_70',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp_luotuo0 = keyboard.Keyboard(deviceName='key_resp_luotuo0')
    
    # --- Initialize components for Routine "trialweicheng0" ---
    text_weicheng0 = visual.TextStim(win=win, name='text_weicheng0',
        text='围城',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_71 = visual.TextStim(win=win, name='text_71',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_72 = visual.TextStim(win=win, name='text_72',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp_weicheng0 = keyboard.Keyboard(deviceName='key_resp_weicheng0')
    
    # --- Initialize components for Routine "trialchuanghu" ---
    text_chuanghu = visual.TextStim(win=win, name='text_chuanghu',
        text='窗户',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_chuanghu = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_chuanghu',    name='sound_chuanghu'
    )
    sound_chuanghu.setVolume(1.0)
    text_73 = visual.TextStim(win=win, name='text_73',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_74 = visual.TextStim(win=win, name='text_74',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_chuanghu = keyboard.Keyboard(deviceName='key_resp_chuanghu')
    
    # --- Initialize components for Routine "trialdazhong1" ---
    text_dazhong1 = visual.TextStim(win=win, name='text_dazhong1',
        text='大众',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_dazhong1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_dazhong1',    name='sound_dazhong1'
    )
    sound_dazhong1.setVolume(1.0)
    text_75 = visual.TextStim(win=win, name='text_75',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_76 = visual.TextStim(win=win, name='text_76',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_dazhong1 = keyboard.Keyboard(deviceName='key_resp_dazhong1')
    
    # --- Initialize components for Routine "trialqingfeng0" ---
    text_qingfeng0 = visual.TextStim(win=win, name='text_qingfeng0',
        text='清风',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_qingfeng0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_qingfeng0',    name='sound_qingfeng0'
    )
    sound_qingfeng0.setVolume(1.0)
    text_77 = visual.TextStim(win=win, name='text_77',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_78 = visual.TextStim(win=win, name='text_78',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_qingfeng0 = keyboard.Keyboard(deviceName='key_resp_qingfeng0')
    
    # --- Initialize components for Routine "trialmutou" ---
    text_mutou = visual.TextStim(win=win, name='text_mutou',
        text='木头',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_mutou = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_mutou',    name='sound_mutou'
    )
    sound_mutou.setVolume(1.0)
    text_79 = visual.TextStim(win=win, name='text_79',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_80 = visual.TextStim(win=win, name='text_80',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_mutou = keyboard.Keyboard(deviceName='key_resp_mutou')
    
    # --- Initialize components for Routine "trialfangjian" ---
    text_fangjian = visual.TextStim(win=win, name='text_fangjian',
        text='房间',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_fangjian = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_fangjian',    name='sound_fangjian'
    )
    sound_fangjian.setVolume(1.0)
    text_81 = visual.TextStim(win=win, name='text_81',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_82 = visual.TextStim(win=win, name='text_82',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_fangjian = keyboard.Keyboard(deviceName='key_resp_fangjian')
    
    # --- Initialize components for Routine "trialhuahai1" ---
    text_huahai1 = visual.TextStim(win=win, name='text_huahai1',
        text='花海\n',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_huahi1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_huahi1',    name='sound_huahi1'
    )
    sound_huahi1.setVolume(1.0)
    text_83 = visual.TextStim(win=win, name='text_83',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_84 = visual.TextStim(win=win, name='text_84',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_huahai1 = keyboard.Keyboard(deviceName='key_resp_huahai1')
    
    # --- Initialize components for Routine "triallixiang0" ---
    text_lixiang0 = visual.TextStim(win=win, name='text_lixiang0',
        text='理想',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_lixiang0 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_lixiang0',    name='sound_lixiang0'
    )
    sound_lixiang0.setVolume(1.0)
    text_85 = visual.TextStim(win=win, name='text_85',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_86 = visual.TextStim(win=win, name='text_86',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_lixiang0 = keyboard.Keyboard(deviceName='key_resp_lixiang0')
    
    # --- Initialize components for Routine "trialheimei1" ---
    text_heimei1 = visual.TextStim(win=win, name='text_heimei1',
        text='黑莓',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_87 = visual.TextStim(win=win, name='text_87',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_88 = visual.TextStim(win=win, name='text_88',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp_heimei1 = keyboard.Keyboard(deviceName='key_resp_heimei1')
    
    # --- Initialize components for Routine "trialyintian1" ---
    text_yintian1 = visual.TextStim(win=win, name='text_yintian1',
        text='阴天',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.5, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    sound_yintian1 = sound.Sound(
        'A', 
        secs=-1, 
        stereo=True, 
        hamming=True, 
        speaker='sound_yintian1',    name='sound_yintian1'
    )
    sound_yintian1.setVolume(1.0)
    text_89 = visual.TextStim(win=win, name='text_89',
        text='请听句子...',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    text_90 = visual.TextStim(win=win, name='text_90',
        text='普通名词“←”\n专有名词“→',
        font='SimHei',
        pos=(0, 0), draggable=False, height=0.09, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    key_resp_yintian1 = keyboard.Keyboard(deviceName='key_resp_yintian1')
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "Introductions" ---
    # create an object to store info about Routine Introductions
    Introductions = data.Routine(
        name='Introductions',
        components=[introductions, key_resp],
    )
    Introductions.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # store start times for Introductions
    Introductions.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    Introductions.tStart = globalClock.getTime(format='float')
    Introductions.status = STARTED
    thisExp.addData('Introductions.started', Introductions.tStart)
    Introductions.maxDuration = None
    # keep track of which components have finished
    IntroductionsComponents = Introductions.components
    for thisComponent in Introductions.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Introductions" ---
    Introductions.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 999.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *introductions* updates
        
        # if introductions is starting this frame...
        if introductions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            introductions.frameNStart = frameN  # exact frame index
            introductions.tStart = t  # local t and not account for scr refresh
            introductions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(introductions, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'introductions.started')
            # update status
            introductions.status = STARTED
            introductions.setAutoDraw(True)
        
        # if introductions is active this frame...
        if introductions.status == STARTED:
            # update params
            pass
        
        # if introductions is stopping this frame...
        if introductions.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > introductions.tStartRefresh + 999-frameTolerance:
                # keep track of stop time/frame for later
                introductions.tStop = t  # not accounting for scr refresh
                introductions.tStopRefresh = tThisFlipGlobal  # on global time
                introductions.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'introductions.stopped')
                # update status
                introductions.status = FINISHED
                introductions.setAutoDraw(False)
        
        # *key_resp* updates
        waitOnFlip = False
        
        # if key_resp is starting this frame...
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp.started')
            # update status
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp is stopping this frame...
        if key_resp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp.tStartRefresh + 999-frameTolerance:
                # keep track of stop time/frame for later
                key_resp.tStop = t  # not accounting for scr refresh
                key_resp.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp.stopped')
                # update status
                key_resp.status = FINISHED
                key_resp.status = FINISHED
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[0].name  # just the first key pressed
                key_resp.rt = _key_resp_allKeys[0].rt
                key_resp.duration = _key_resp_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            Introductions.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Introductions.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Introductions" ---
    for thisComponent in Introductions.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for Introductions
    Introductions.tStop = globalClock.getTime(format='float')
    Introductions.tStopRefresh = tThisFlipGlobal
    thisExp.addData('Introductions.stopped', Introductions.tStop)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    thisExp.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        thisExp.addData('key_resp.rt', key_resp.rt)
        thisExp.addData('key_resp.duration', key_resp.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if Introductions.maxDurationReached:
        routineTimer.addTime(-Introductions.maxDuration)
    elif Introductions.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-999.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialapple0" ---
    # create an object to store info about Routine trialapple0
    trialapple0 = data.Routine(
        name='trialapple0',
        components=[text_apple0, sound_apple0, text, text_2, key_resp_apple0],
    )
    trialapple0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_apple0.setSound('听力/苹果-普通.wav', secs=3.0, hamming=True)
    sound_apple0.setVolume(1.0, log=False)
    sound_apple0.seek(0)
    # create starting attributes for key_resp_apple0
    key_resp_apple0.keys = []
    key_resp_apple0.rt = []
    _key_resp_apple0_allKeys = []
    # store start times for trialapple0
    trialapple0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialapple0.tStart = globalClock.getTime(format='float')
    trialapple0.status = STARTED
    thisExp.addData('trialapple0.started', trialapple0.tStart)
    trialapple0.maxDuration = None
    # keep track of which components have finished
    trialapple0Components = trialapple0.components
    for thisComponent in trialapple0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialapple0" ---
    trialapple0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_apple0* updates
        
        # if text_apple0 is starting this frame...
        if text_apple0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_apple0.frameNStart = frameN  # exact frame index
            text_apple0.tStart = t  # local t and not account for scr refresh
            text_apple0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_apple0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_apple0.started')
            # update status
            text_apple0.status = STARTED
            text_apple0.setAutoDraw(True)
        
        # if text_apple0 is active this frame...
        if text_apple0.status == STARTED:
            # update params
            pass
        
        # if text_apple0 is stopping this frame...
        if text_apple0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_apple0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_apple0.tStop = t  # not accounting for scr refresh
                text_apple0.tStopRefresh = tThisFlipGlobal  # on global time
                text_apple0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_apple0.stopped')
                # update status
                text_apple0.status = FINISHED
                text_apple0.setAutoDraw(False)
        
        # *sound_apple0* updates
        
        # if sound_apple0 is starting this frame...
        if sound_apple0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_apple0.frameNStart = frameN  # exact frame index
            sound_apple0.tStart = t  # local t and not account for scr refresh
            sound_apple0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_apple0.started', tThisFlipGlobal)
            # update status
            sound_apple0.status = STARTED
            sound_apple0.play(when=win)  # sync with win flip
        
        # if sound_apple0 is stopping this frame...
        if sound_apple0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_apple0.tStartRefresh + 3.0-frameTolerance or sound_apple0.isFinished:
                # keep track of stop time/frame for later
                sound_apple0.tStop = t  # not accounting for scr refresh
                sound_apple0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_apple0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_apple0.stopped')
                # update status
                sound_apple0.status = FINISHED
                sound_apple0.stop()
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        
        # if text is stopping this frame...
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.tStopRefresh = tThisFlipGlobal  # on global time
                text.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text.stopped')
                # update status
                text.status = FINISHED
                text.setAutoDraw(False)
        
        # *text_2* updates
        
        # if text_2 is starting this frame...
        if text_2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_2.started')
            # update status
            text_2.status = STARTED
            text_2.setAutoDraw(True)
        
        # if text_2 is active this frame...
        if text_2.status == STARTED:
            # update params
            pass
        
        # if text_2 is stopping this frame...
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.tStopRefresh = tThisFlipGlobal  # on global time
                text_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_2.stopped')
                # update status
                text_2.status = FINISHED
                text_2.setAutoDraw(False)
        
        # *key_resp_apple0* updates
        waitOnFlip = False
        
        # if key_resp_apple0 is starting this frame...
        if key_resp_apple0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_apple0.frameNStart = frameN  # exact frame index
            key_resp_apple0.tStart = t  # local t and not account for scr refresh
            key_resp_apple0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_apple0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_apple0.started')
            # update status
            key_resp_apple0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_apple0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_apple0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_apple0 is stopping this frame...
        if key_resp_apple0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_apple0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_apple0.tStop = t  # not accounting for scr refresh
                key_resp_apple0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_apple0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_apple0.stopped')
                # update status
                key_resp_apple0.status = FINISHED
                key_resp_apple0.status = FINISHED
        if key_resp_apple0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_apple0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_apple0_allKeys.extend(theseKeys)
            if len(_key_resp_apple0_allKeys):
                key_resp_apple0.keys = _key_resp_apple0_allKeys[0].name  # just the first key pressed
                key_resp_apple0.rt = _key_resp_apple0_allKeys[0].rt
                key_resp_apple0.duration = _key_resp_apple0_allKeys[0].duration
                # was this correct?
                if (key_resp_apple0.keys == str("'left'")) or (key_resp_apple0.keys == "'left'"):
                    key_resp_apple0.corr = 1
                else:
                    key_resp_apple0.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_apple0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialapple0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialapple0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialapple0" ---
    for thisComponent in trialapple0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialapple0
    trialapple0.tStop = globalClock.getTime(format='float')
    trialapple0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialapple0.stopped', trialapple0.tStop)
    sound_apple0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_apple0.keys in ['', [], None]:  # No response was made
        key_resp_apple0.keys = None
        # was no response the correct answer?!
        if str("'left'").lower() == 'none':
           key_resp_apple0.corr = 1;  # correct non-response
        else:
           key_resp_apple0.corr = 0;  # failed to respond (incorrectly)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('key_resp_apple0.keys',key_resp_apple0.keys)
    thisExp.addData('key_resp_apple0.corr', key_resp_apple0.corr)
    if key_resp_apple0.keys != None:  # we had a response
        thisExp.addData('key_resp_apple0.rt', key_resp_apple0.rt)
        thisExp.addData('key_resp_apple0.duration', key_resp_apple0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialapple0.maxDurationReached:
        routineTimer.addTime(-trialapple0.maxDuration)
    elif trialapple0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialapple1" ---
    # create an object to store info about Routine trialapple1
    trialapple1 = data.Routine(
        name='trialapple1',
        components=[text_apple1, sound_apple1, text_3, text_4, key_resp_apple1],
    )
    trialapple1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_apple1.setSound('听力/苹果-专有.wav', secs=3.0, hamming=True)
    sound_apple1.setVolume(1.0, log=False)
    sound_apple1.seek(0)
    # create starting attributes for key_resp_apple1
    key_resp_apple1.keys = []
    key_resp_apple1.rt = []
    _key_resp_apple1_allKeys = []
    # store start times for trialapple1
    trialapple1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialapple1.tStart = globalClock.getTime(format='float')
    trialapple1.status = STARTED
    thisExp.addData('trialapple1.started', trialapple1.tStart)
    trialapple1.maxDuration = None
    # keep track of which components have finished
    trialapple1Components = trialapple1.components
    for thisComponent in trialapple1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialapple1" ---
    trialapple1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_apple1* updates
        
        # if text_apple1 is starting this frame...
        if text_apple1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_apple1.frameNStart = frameN  # exact frame index
            text_apple1.tStart = t  # local t and not account for scr refresh
            text_apple1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_apple1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_apple1.started')
            # update status
            text_apple1.status = STARTED
            text_apple1.setAutoDraw(True)
        
        # if text_apple1 is active this frame...
        if text_apple1.status == STARTED:
            # update params
            pass
        
        # if text_apple1 is stopping this frame...
        if text_apple1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_apple1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_apple1.tStop = t  # not accounting for scr refresh
                text_apple1.tStopRefresh = tThisFlipGlobal  # on global time
                text_apple1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_apple1.stopped')
                # update status
                text_apple1.status = FINISHED
                text_apple1.setAutoDraw(False)
        
        # *sound_apple1* updates
        
        # if sound_apple1 is starting this frame...
        if sound_apple1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_apple1.frameNStart = frameN  # exact frame index
            sound_apple1.tStart = t  # local t and not account for scr refresh
            sound_apple1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_apple1.started', tThisFlipGlobal)
            # update status
            sound_apple1.status = STARTED
            sound_apple1.play(when=win)  # sync with win flip
        
        # if sound_apple1 is stopping this frame...
        if sound_apple1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_apple1.tStartRefresh + 3.0-frameTolerance or sound_apple1.isFinished:
                # keep track of stop time/frame for later
                sound_apple1.tStop = t  # not accounting for scr refresh
                sound_apple1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_apple1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_apple1.stopped')
                # update status
                sound_apple1.status = FINISHED
                sound_apple1.stop()
        
        # *text_3* updates
        
        # if text_3 is starting this frame...
        if text_3.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_3.started')
            # update status
            text_3.status = STARTED
            text_3.setAutoDraw(True)
        
        # if text_3 is active this frame...
        if text_3.status == STARTED:
            # update params
            pass
        
        # if text_3 is stopping this frame...
        if text_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_3.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                text_3.tStop = t  # not accounting for scr refresh
                text_3.tStopRefresh = tThisFlipGlobal  # on global time
                text_3.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_3.stopped')
                # update status
                text_3.status = FINISHED
                text_3.setAutoDraw(False)
        
        # *text_4* updates
        
        # if text_4 is starting this frame...
        if text_4.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_4.frameNStart = frameN  # exact frame index
            text_4.tStart = t  # local t and not account for scr refresh
            text_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_4.started')
            # update status
            text_4.status = STARTED
            text_4.setAutoDraw(True)
        
        # if text_4 is active this frame...
        if text_4.status == STARTED:
            # update params
            pass
        
        # if text_4 is stopping this frame...
        if text_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_4.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_4.tStop = t  # not accounting for scr refresh
                text_4.tStopRefresh = tThisFlipGlobal  # on global time
                text_4.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_4.stopped')
                # update status
                text_4.status = FINISHED
                text_4.setAutoDraw(False)
        
        # *key_resp_apple1* updates
        waitOnFlip = False
        
        # if key_resp_apple1 is starting this frame...
        if key_resp_apple1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_apple1.frameNStart = frameN  # exact frame index
            key_resp_apple1.tStart = t  # local t and not account for scr refresh
            key_resp_apple1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_apple1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_apple1.started')
            # update status
            key_resp_apple1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_apple1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_apple1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_apple1 is stopping this frame...
        if key_resp_apple1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_apple1.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_apple1.tStop = t  # not accounting for scr refresh
                key_resp_apple1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_apple1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_apple1.stopped')
                # update status
                key_resp_apple1.status = FINISHED
                key_resp_apple1.status = FINISHED
        if key_resp_apple1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_apple1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_apple1_allKeys.extend(theseKeys)
            if len(_key_resp_apple1_allKeys):
                key_resp_apple1.keys = _key_resp_apple1_allKeys[0].name  # just the first key pressed
                key_resp_apple1.rt = _key_resp_apple1_allKeys[0].rt
                key_resp_apple1.duration = _key_resp_apple1_allKeys[0].duration
                # was this correct?
                if (key_resp_apple1.keys == str("'right'")) or (key_resp_apple1.keys == "'right'"):
                    key_resp_apple1.corr = 1
                else:
                    key_resp_apple1.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_apple1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialapple1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialapple1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialapple1" ---
    for thisComponent in trialapple1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialapple1
    trialapple1.tStop = globalClock.getTime(format='float')
    trialapple1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialapple1.stopped', trialapple1.tStop)
    sound_apple1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_apple1.keys in ['', [], None]:  # No response was made
        key_resp_apple1.keys = None
        # was no response the correct answer?!
        if str("'right'").lower() == 'none':
           key_resp_apple1.corr = 1;  # correct non-response
        else:
           key_resp_apple1.corr = 0;  # failed to respond (incorrectly)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('key_resp_apple1.keys',key_resp_apple1.keys)
    thisExp.addData('key_resp_apple1.corr', key_resp_apple1.corr)
    if key_resp_apple1.keys != None:  # we had a response
        thisExp.addData('key_resp_apple1.rt', key_resp_apple1.rt)
        thisExp.addData('key_resp_apple1.duration', key_resp_apple1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialapple1.maxDurationReached:
        routineTimer.addTime(-trialapple1.maxDuration)
    elif trialapple1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialxiaomi1" ---
    # create an object to store info about Routine trialxiaomi1
    trialxiaomi1 = data.Routine(
        name='trialxiaomi1',
        components=[text_xiaomi1, sound_xiaomi1, text_5, text_6, key_resp_xiaomi1],
    )
    trialxiaomi1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_xiaomi1.setSound('听力/小米-专有.wav', secs=3.0, hamming=True)
    sound_xiaomi1.setVolume(1.0, log=False)
    sound_xiaomi1.seek(0)
    # create starting attributes for key_resp_xiaomi1
    key_resp_xiaomi1.keys = []
    key_resp_xiaomi1.rt = []
    _key_resp_xiaomi1_allKeys = []
    # store start times for trialxiaomi1
    trialxiaomi1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialxiaomi1.tStart = globalClock.getTime(format='float')
    trialxiaomi1.status = STARTED
    thisExp.addData('trialxiaomi1.started', trialxiaomi1.tStart)
    trialxiaomi1.maxDuration = None
    # keep track of which components have finished
    trialxiaomi1Components = trialxiaomi1.components
    for thisComponent in trialxiaomi1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialxiaomi1" ---
    trialxiaomi1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_xiaomi1* updates
        
        # if text_xiaomi1 is starting this frame...
        if text_xiaomi1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_xiaomi1.frameNStart = frameN  # exact frame index
            text_xiaomi1.tStart = t  # local t and not account for scr refresh
            text_xiaomi1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_xiaomi1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_xiaomi1.started')
            # update status
            text_xiaomi1.status = STARTED
            text_xiaomi1.setAutoDraw(True)
        
        # if text_xiaomi1 is active this frame...
        if text_xiaomi1.status == STARTED:
            # update params
            pass
        
        # if text_xiaomi1 is stopping this frame...
        if text_xiaomi1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_xiaomi1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_xiaomi1.tStop = t  # not accounting for scr refresh
                text_xiaomi1.tStopRefresh = tThisFlipGlobal  # on global time
                text_xiaomi1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_xiaomi1.stopped')
                # update status
                text_xiaomi1.status = FINISHED
                text_xiaomi1.setAutoDraw(False)
        
        # *sound_xiaomi1* updates
        
        # if sound_xiaomi1 is starting this frame...
        if sound_xiaomi1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_xiaomi1.frameNStart = frameN  # exact frame index
            sound_xiaomi1.tStart = t  # local t and not account for scr refresh
            sound_xiaomi1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_xiaomi1.started', tThisFlipGlobal)
            # update status
            sound_xiaomi1.status = STARTED
            sound_xiaomi1.play(when=win)  # sync with win flip
        
        # if sound_xiaomi1 is stopping this frame...
        if sound_xiaomi1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_xiaomi1.tStartRefresh + 3.0-frameTolerance or sound_xiaomi1.isFinished:
                # keep track of stop time/frame for later
                sound_xiaomi1.tStop = t  # not accounting for scr refresh
                sound_xiaomi1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_xiaomi1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_xiaomi1.stopped')
                # update status
                sound_xiaomi1.status = FINISHED
                sound_xiaomi1.stop()
        
        # *text_5* updates
        
        # if text_5 is starting this frame...
        if text_5.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_5.frameNStart = frameN  # exact frame index
            text_5.tStart = t  # local t and not account for scr refresh
            text_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_5.started')
            # update status
            text_5.status = STARTED
            text_5.setAutoDraw(True)
        
        # if text_5 is active this frame...
        if text_5.status == STARTED:
            # update params
            pass
        
        # if text_5 is stopping this frame...
        if text_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_5.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                text_5.tStop = t  # not accounting for scr refresh
                text_5.tStopRefresh = tThisFlipGlobal  # on global time
                text_5.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_5.stopped')
                # update status
                text_5.status = FINISHED
                text_5.setAutoDraw(False)
        
        # *text_6* updates
        
        # if text_6 is starting this frame...
        if text_6.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_6.started')
            # update status
            text_6.status = STARTED
            text_6.setAutoDraw(True)
        
        # if text_6 is active this frame...
        if text_6.status == STARTED:
            # update params
            pass
        
        # if text_6 is stopping this frame...
        if text_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_6.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_6.tStop = t  # not accounting for scr refresh
                text_6.tStopRefresh = tThisFlipGlobal  # on global time
                text_6.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_6.stopped')
                # update status
                text_6.status = FINISHED
                text_6.setAutoDraw(False)
        
        # *key_resp_xiaomi1* updates
        waitOnFlip = False
        
        # if key_resp_xiaomi1 is starting this frame...
        if key_resp_xiaomi1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_xiaomi1.frameNStart = frameN  # exact frame index
            key_resp_xiaomi1.tStart = t  # local t and not account for scr refresh
            key_resp_xiaomi1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_xiaomi1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_xiaomi1.started')
            # update status
            key_resp_xiaomi1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_xiaomi1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_xiaomi1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_xiaomi1 is stopping this frame...
        if key_resp_xiaomi1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_xiaomi1.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_xiaomi1.tStop = t  # not accounting for scr refresh
                key_resp_xiaomi1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_xiaomi1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_xiaomi1.stopped')
                # update status
                key_resp_xiaomi1.status = FINISHED
                key_resp_xiaomi1.status = FINISHED
        if key_resp_xiaomi1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_xiaomi1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_xiaomi1_allKeys.extend(theseKeys)
            if len(_key_resp_xiaomi1_allKeys):
                key_resp_xiaomi1.keys = _key_resp_xiaomi1_allKeys[0].name  # just the first key pressed
                key_resp_xiaomi1.rt = _key_resp_xiaomi1_allKeys[0].rt
                key_resp_xiaomi1.duration = _key_resp_xiaomi1_allKeys[0].duration
                # was this correct?
                if (key_resp_xiaomi1.keys == str("'right'")) or (key_resp_xiaomi1.keys == "'right'"):
                    key_resp_xiaomi1.corr = 1
                else:
                    key_resp_xiaomi1.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_xiaomi1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialxiaomi1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialxiaomi1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialxiaomi1" ---
    for thisComponent in trialxiaomi1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialxiaomi1
    trialxiaomi1.tStop = globalClock.getTime(format='float')
    trialxiaomi1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialxiaomi1.stopped', trialxiaomi1.tStop)
    sound_xiaomi1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_xiaomi1.keys in ['', [], None]:  # No response was made
        key_resp_xiaomi1.keys = None
        # was no response the correct answer?!
        if str("'right'").lower() == 'none':
           key_resp_xiaomi1.corr = 1;  # correct non-response
        else:
           key_resp_xiaomi1.corr = 0;  # failed to respond (incorrectly)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('key_resp_xiaomi1.keys',key_resp_xiaomi1.keys)
    thisExp.addData('key_resp_xiaomi1.corr', key_resp_xiaomi1.corr)
    if key_resp_xiaomi1.keys != None:  # we had a response
        thisExp.addData('key_resp_xiaomi1.rt', key_resp_xiaomi1.rt)
        thisExp.addData('key_resp_xiaomi1.duration', key_resp_xiaomi1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialxiaomi1.maxDurationReached:
        routineTimer.addTime(-trialxiaomi1.maxDuration)
    elif trialxiaomi1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialxiaomi0" ---
    # create an object to store info about Routine trialxiaomi0
    trialxiaomi0 = data.Routine(
        name='trialxiaomi0',
        components=[text_xiaomi0, sound_xiaomi0, text_9, text_10, key_xiaomi0],
    )
    trialxiaomi0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_xiaomi0.setSound('听力/小米-普通.wav', secs=3.0, hamming=True)
    sound_xiaomi0.setVolume(1.0, log=False)
    sound_xiaomi0.seek(0)
    # create starting attributes for key_xiaomi0
    key_xiaomi0.keys = []
    key_xiaomi0.rt = []
    _key_xiaomi0_allKeys = []
    # store start times for trialxiaomi0
    trialxiaomi0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialxiaomi0.tStart = globalClock.getTime(format='float')
    trialxiaomi0.status = STARTED
    thisExp.addData('trialxiaomi0.started', trialxiaomi0.tStart)
    trialxiaomi0.maxDuration = None
    # keep track of which components have finished
    trialxiaomi0Components = trialxiaomi0.components
    for thisComponent in trialxiaomi0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialxiaomi0" ---
    trialxiaomi0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_xiaomi0* updates
        
        # if text_xiaomi0 is starting this frame...
        if text_xiaomi0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_xiaomi0.frameNStart = frameN  # exact frame index
            text_xiaomi0.tStart = t  # local t and not account for scr refresh
            text_xiaomi0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_xiaomi0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_xiaomi0.started')
            # update status
            text_xiaomi0.status = STARTED
            text_xiaomi0.setAutoDraw(True)
        
        # if text_xiaomi0 is active this frame...
        if text_xiaomi0.status == STARTED:
            # update params
            pass
        
        # if text_xiaomi0 is stopping this frame...
        if text_xiaomi0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_xiaomi0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_xiaomi0.tStop = t  # not accounting for scr refresh
                text_xiaomi0.tStopRefresh = tThisFlipGlobal  # on global time
                text_xiaomi0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_xiaomi0.stopped')
                # update status
                text_xiaomi0.status = FINISHED
                text_xiaomi0.setAutoDraw(False)
        
        # *sound_xiaomi0* updates
        
        # if sound_xiaomi0 is starting this frame...
        if sound_xiaomi0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_xiaomi0.frameNStart = frameN  # exact frame index
            sound_xiaomi0.tStart = t  # local t and not account for scr refresh
            sound_xiaomi0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_xiaomi0.started', tThisFlipGlobal)
            # update status
            sound_xiaomi0.status = STARTED
            sound_xiaomi0.play(when=win)  # sync with win flip
        
        # if sound_xiaomi0 is stopping this frame...
        if sound_xiaomi0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_xiaomi0.tStartRefresh + 3.0-frameTolerance or sound_xiaomi0.isFinished:
                # keep track of stop time/frame for later
                sound_xiaomi0.tStop = t  # not accounting for scr refresh
                sound_xiaomi0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_xiaomi0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_xiaomi0.stopped')
                # update status
                sound_xiaomi0.status = FINISHED
                sound_xiaomi0.stop()
        
        # *text_9* updates
        
        # if text_9 is starting this frame...
        if text_9.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_9.frameNStart = frameN  # exact frame index
            text_9.tStart = t  # local t and not account for scr refresh
            text_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_9.started')
            # update status
            text_9.status = STARTED
            text_9.setAutoDraw(True)
        
        # if text_9 is active this frame...
        if text_9.status == STARTED:
            # update params
            pass
        
        # if text_9 is stopping this frame...
        if text_9.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_9.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_9.tStop = t  # not accounting for scr refresh
                text_9.tStopRefresh = tThisFlipGlobal  # on global time
                text_9.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_9.stopped')
                # update status
                text_9.status = FINISHED
                text_9.setAutoDraw(False)
        
        # *text_10* updates
        
        # if text_10 is starting this frame...
        if text_10.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_10.frameNStart = frameN  # exact frame index
            text_10.tStart = t  # local t and not account for scr refresh
            text_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_10.started')
            # update status
            text_10.status = STARTED
            text_10.setAutoDraw(True)
        
        # if text_10 is active this frame...
        if text_10.status == STARTED:
            # update params
            pass
        
        # if text_10 is stopping this frame...
        if text_10.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_10.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_10.tStop = t  # not accounting for scr refresh
                text_10.tStopRefresh = tThisFlipGlobal  # on global time
                text_10.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_10.stopped')
                # update status
                text_10.status = FINISHED
                text_10.setAutoDraw(False)
        
        # *key_xiaomi0* updates
        waitOnFlip = False
        
        # if key_xiaomi0 is starting this frame...
        if key_xiaomi0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_xiaomi0.frameNStart = frameN  # exact frame index
            key_xiaomi0.tStart = t  # local t and not account for scr refresh
            key_xiaomi0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_xiaomi0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_xiaomi0.started')
            # update status
            key_xiaomi0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_xiaomi0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_xiaomi0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_xiaomi0 is stopping this frame...
        if key_xiaomi0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_xiaomi0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_xiaomi0.tStop = t  # not accounting for scr refresh
                key_xiaomi0.tStopRefresh = tThisFlipGlobal  # on global time
                key_xiaomi0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_xiaomi0.stopped')
                # update status
                key_xiaomi0.status = FINISHED
                key_xiaomi0.status = FINISHED
        if key_xiaomi0.status == STARTED and not waitOnFlip:
            theseKeys = key_xiaomi0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_xiaomi0_allKeys.extend(theseKeys)
            if len(_key_xiaomi0_allKeys):
                key_xiaomi0.keys = _key_xiaomi0_allKeys[-1].name  # just the last key pressed
                key_xiaomi0.rt = _key_xiaomi0_allKeys[-1].rt
                key_xiaomi0.duration = _key_xiaomi0_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_xiaomi0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialxiaomi0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialxiaomi0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialxiaomi0" ---
    for thisComponent in trialxiaomi0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialxiaomi0
    trialxiaomi0.tStop = globalClock.getTime(format='float')
    trialxiaomi0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialxiaomi0.stopped', trialxiaomi0.tStop)
    sound_xiaomi0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_xiaomi0.keys in ['', [], None]:  # No response was made
        key_xiaomi0.keys = None
    thisExp.addData('key_xiaomi0.keys',key_xiaomi0.keys)
    if key_xiaomi0.keys != None:  # we had a response
        thisExp.addData('key_xiaomi0.rt', key_xiaomi0.rt)
        thisExp.addData('key_xiaomi0.duration', key_xiaomi0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialxiaomi0.maxDurationReached:
        routineTimer.addTime(-trialxiaomi0.maxDuration)
    elif trialxiaomi0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialzhuozi" ---
    # create an object to store info about Routine trialzhuozi
    trialzhuozi = data.Routine(
        name='trialzhuozi',
        components=[text_zhuozi, sound_zhuozi, text_7, text_8, key_resp_zhuozi],
    )
    trialzhuozi.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_zhuozi.setSound('听力/桌子-单义.wav', secs=3.0, hamming=True)
    sound_zhuozi.setVolume(1.0, log=False)
    sound_zhuozi.seek(0)
    # create starting attributes for key_resp_zhuozi
    key_resp_zhuozi.keys = []
    key_resp_zhuozi.rt = []
    _key_resp_zhuozi_allKeys = []
    # store start times for trialzhuozi
    trialzhuozi.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialzhuozi.tStart = globalClock.getTime(format='float')
    trialzhuozi.status = STARTED
    thisExp.addData('trialzhuozi.started', trialzhuozi.tStart)
    trialzhuozi.maxDuration = None
    # keep track of which components have finished
    trialzhuoziComponents = trialzhuozi.components
    for thisComponent in trialzhuozi.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialzhuozi" ---
    trialzhuozi.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_zhuozi* updates
        
        # if text_zhuozi is starting this frame...
        if text_zhuozi.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_zhuozi.frameNStart = frameN  # exact frame index
            text_zhuozi.tStart = t  # local t and not account for scr refresh
            text_zhuozi.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_zhuozi, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_zhuozi.started')
            # update status
            text_zhuozi.status = STARTED
            text_zhuozi.setAutoDraw(True)
        
        # if text_zhuozi is active this frame...
        if text_zhuozi.status == STARTED:
            # update params
            pass
        
        # if text_zhuozi is stopping this frame...
        if text_zhuozi.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_zhuozi.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_zhuozi.tStop = t  # not accounting for scr refresh
                text_zhuozi.tStopRefresh = tThisFlipGlobal  # on global time
                text_zhuozi.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_zhuozi.stopped')
                # update status
                text_zhuozi.status = FINISHED
                text_zhuozi.setAutoDraw(False)
        
        # *sound_zhuozi* updates
        
        # if sound_zhuozi is starting this frame...
        if sound_zhuozi.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_zhuozi.frameNStart = frameN  # exact frame index
            sound_zhuozi.tStart = t  # local t and not account for scr refresh
            sound_zhuozi.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_zhuozi.started', tThisFlipGlobal)
            # update status
            sound_zhuozi.status = STARTED
            sound_zhuozi.play(when=win)  # sync with win flip
        
        # if sound_zhuozi is stopping this frame...
        if sound_zhuozi.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_zhuozi.tStartRefresh + 3.0-frameTolerance or sound_zhuozi.isFinished:
                # keep track of stop time/frame for later
                sound_zhuozi.tStop = t  # not accounting for scr refresh
                sound_zhuozi.tStopRefresh = tThisFlipGlobal  # on global time
                sound_zhuozi.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_zhuozi.stopped')
                # update status
                sound_zhuozi.status = FINISHED
                sound_zhuozi.stop()
        
        # *text_7* updates
        
        # if text_7 is starting this frame...
        if text_7.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_7.started')
            # update status
            text_7.status = STARTED
            text_7.setAutoDraw(True)
        
        # if text_7 is active this frame...
        if text_7.status == STARTED:
            # update params
            pass
        
        # if text_7 is stopping this frame...
        if text_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_7.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_7.tStop = t  # not accounting for scr refresh
                text_7.tStopRefresh = tThisFlipGlobal  # on global time
                text_7.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_7.stopped')
                # update status
                text_7.status = FINISHED
                text_7.setAutoDraw(False)
        
        # *text_8* updates
        
        # if text_8 is starting this frame...
        if text_8.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_8.frameNStart = frameN  # exact frame index
            text_8.tStart = t  # local t and not account for scr refresh
            text_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_8.started')
            # update status
            text_8.status = STARTED
            text_8.setAutoDraw(True)
        
        # if text_8 is active this frame...
        if text_8.status == STARTED:
            # update params
            pass
        
        # if text_8 is stopping this frame...
        if text_8.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_8.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_8.tStop = t  # not accounting for scr refresh
                text_8.tStopRefresh = tThisFlipGlobal  # on global time
                text_8.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_8.stopped')
                # update status
                text_8.status = FINISHED
                text_8.setAutoDraw(False)
        
        # *key_resp_zhuozi* updates
        waitOnFlip = False
        
        # if key_resp_zhuozi is starting this frame...
        if key_resp_zhuozi.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_zhuozi.frameNStart = frameN  # exact frame index
            key_resp_zhuozi.tStart = t  # local t and not account for scr refresh
            key_resp_zhuozi.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_zhuozi, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_zhuozi.started')
            # update status
            key_resp_zhuozi.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_zhuozi.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_zhuozi.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_zhuozi is stopping this frame...
        if key_resp_zhuozi.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_zhuozi.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_zhuozi.tStop = t  # not accounting for scr refresh
                key_resp_zhuozi.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_zhuozi.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_zhuozi.stopped')
                # update status
                key_resp_zhuozi.status = FINISHED
                key_resp_zhuozi.status = FINISHED
        if key_resp_zhuozi.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_zhuozi.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_zhuozi_allKeys.extend(theseKeys)
            if len(_key_resp_zhuozi_allKeys):
                key_resp_zhuozi.keys = _key_resp_zhuozi_allKeys[0].name  # just the first key pressed
                key_resp_zhuozi.rt = _key_resp_zhuozi_allKeys[0].rt
                key_resp_zhuozi.duration = _key_resp_zhuozi_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_zhuozi]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialzhuozi.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialzhuozi.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialzhuozi" ---
    for thisComponent in trialzhuozi.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialzhuozi
    trialzhuozi.tStop = globalClock.getTime(format='float')
    trialzhuozi.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialzhuozi.stopped', trialzhuozi.tStop)
    sound_zhuozi.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_zhuozi.keys in ['', [], None]:  # No response was made
        key_resp_zhuozi.keys = None
    thisExp.addData('key_resp_zhuozi.keys',key_resp_zhuozi.keys)
    if key_resp_zhuozi.keys != None:  # we had a response
        thisExp.addData('key_resp_zhuozi.rt', key_resp_zhuozi.rt)
        thisExp.addData('key_resp_zhuozi.duration', key_resp_zhuozi.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialzhuozi.maxDurationReached:
        routineTimer.addTime(-trialzhuozi.maxDuration)
    elif trialzhuozi.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialqingshu0" ---
    # create an object to store info about Routine trialqingshu0
    trialqingshu0 = data.Routine(
        name='trialqingshu0',
        components=[text_qingshu0, sound_qingshu0, text_11, text_12, key_resp_2qingshu0],
    )
    trialqingshu0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_qingshu0.setSound('听力/情书-普通.wav', secs=3.0, hamming=True)
    sound_qingshu0.setVolume(1.0, log=False)
    sound_qingshu0.seek(0)
    # create starting attributes for key_resp_2qingshu0
    key_resp_2qingshu0.keys = []
    key_resp_2qingshu0.rt = []
    _key_resp_2qingshu0_allKeys = []
    # store start times for trialqingshu0
    trialqingshu0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialqingshu0.tStart = globalClock.getTime(format='float')
    trialqingshu0.status = STARTED
    thisExp.addData('trialqingshu0.started', trialqingshu0.tStart)
    trialqingshu0.maxDuration = None
    # keep track of which components have finished
    trialqingshu0Components = trialqingshu0.components
    for thisComponent in trialqingshu0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialqingshu0" ---
    trialqingshu0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_qingshu0* updates
        
        # if text_qingshu0 is starting this frame...
        if text_qingshu0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_qingshu0.frameNStart = frameN  # exact frame index
            text_qingshu0.tStart = t  # local t and not account for scr refresh
            text_qingshu0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_qingshu0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_qingshu0.started')
            # update status
            text_qingshu0.status = STARTED
            text_qingshu0.setAutoDraw(True)
        
        # if text_qingshu0 is active this frame...
        if text_qingshu0.status == STARTED:
            # update params
            pass
        
        # if text_qingshu0 is stopping this frame...
        if text_qingshu0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_qingshu0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_qingshu0.tStop = t  # not accounting for scr refresh
                text_qingshu0.tStopRefresh = tThisFlipGlobal  # on global time
                text_qingshu0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_qingshu0.stopped')
                # update status
                text_qingshu0.status = FINISHED
                text_qingshu0.setAutoDraw(False)
        
        # *sound_qingshu0* updates
        
        # if sound_qingshu0 is starting this frame...
        if sound_qingshu0.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            sound_qingshu0.frameNStart = frameN  # exact frame index
            sound_qingshu0.tStart = t  # local t and not account for scr refresh
            sound_qingshu0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_qingshu0.started', tThisFlipGlobal)
            # update status
            sound_qingshu0.status = STARTED
            sound_qingshu0.play(when=win)  # sync with win flip
        
        # if sound_qingshu0 is stopping this frame...
        if sound_qingshu0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_qingshu0.tStartRefresh + 3.0-frameTolerance or sound_qingshu0.isFinished:
                # keep track of stop time/frame for later
                sound_qingshu0.tStop = t  # not accounting for scr refresh
                sound_qingshu0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_qingshu0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_qingshu0.stopped')
                # update status
                sound_qingshu0.status = FINISHED
                sound_qingshu0.stop()
        
        # *text_11* updates
        
        # if text_11 is starting this frame...
        if text_11.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_11.frameNStart = frameN  # exact frame index
            text_11.tStart = t  # local t and not account for scr refresh
            text_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_11.started')
            # update status
            text_11.status = STARTED
            text_11.setAutoDraw(True)
        
        # if text_11 is active this frame...
        if text_11.status == STARTED:
            # update params
            pass
        
        # if text_11 is stopping this frame...
        if text_11.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_11.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_11.tStop = t  # not accounting for scr refresh
                text_11.tStopRefresh = tThisFlipGlobal  # on global time
                text_11.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_11.stopped')
                # update status
                text_11.status = FINISHED
                text_11.setAutoDraw(False)
        
        # *text_12* updates
        
        # if text_12 is starting this frame...
        if text_12.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_12.frameNStart = frameN  # exact frame index
            text_12.tStart = t  # local t and not account for scr refresh
            text_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_12.started')
            # update status
            text_12.status = STARTED
            text_12.setAutoDraw(True)
        
        # if text_12 is active this frame...
        if text_12.status == STARTED:
            # update params
            pass
        
        # if text_12 is stopping this frame...
        if text_12.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_12.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_12.tStop = t  # not accounting for scr refresh
                text_12.tStopRefresh = tThisFlipGlobal  # on global time
                text_12.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_12.stopped')
                # update status
                text_12.status = FINISHED
                text_12.setAutoDraw(False)
        
        # *key_resp_2qingshu0* updates
        waitOnFlip = False
        
        # if key_resp_2qingshu0 is starting this frame...
        if key_resp_2qingshu0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2qingshu0.frameNStart = frameN  # exact frame index
            key_resp_2qingshu0.tStart = t  # local t and not account for scr refresh
            key_resp_2qingshu0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2qingshu0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_2qingshu0.started')
            # update status
            key_resp_2qingshu0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2qingshu0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2qingshu0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_2qingshu0 is stopping this frame...
        if key_resp_2qingshu0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_2qingshu0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_2qingshu0.tStop = t  # not accounting for scr refresh
                key_resp_2qingshu0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_2qingshu0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_2qingshu0.stopped')
                # update status
                key_resp_2qingshu0.status = FINISHED
                key_resp_2qingshu0.status = FINISHED
        if key_resp_2qingshu0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2qingshu0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_2qingshu0_allKeys.extend(theseKeys)
            if len(_key_resp_2qingshu0_allKeys):
                key_resp_2qingshu0.keys = _key_resp_2qingshu0_allKeys[0].name  # just the first key pressed
                key_resp_2qingshu0.rt = _key_resp_2qingshu0_allKeys[0].rt
                key_resp_2qingshu0.duration = _key_resp_2qingshu0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_qingshu0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialqingshu0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialqingshu0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialqingshu0" ---
    for thisComponent in trialqingshu0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialqingshu0
    trialqingshu0.tStop = globalClock.getTime(format='float')
    trialqingshu0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialqingshu0.stopped', trialqingshu0.tStop)
    sound_qingshu0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_2qingshu0.keys in ['', [], None]:  # No response was made
        key_resp_2qingshu0.keys = None
    thisExp.addData('key_resp_2qingshu0.keys',key_resp_2qingshu0.keys)
    if key_resp_2qingshu0.keys != None:  # we had a response
        thisExp.addData('key_resp_2qingshu0.rt', key_resp_2qingshu0.rt)
        thisExp.addData('key_resp_2qingshu0.duration', key_resp_2qingshu0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialqingshu0.maxDurationReached:
        routineTimer.addTime(-trialqingshu0.maxDuration)
    elif trialqingshu0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialweicheng1" ---
    # create an object to store info about Routine trialweicheng1
    trialweicheng1 = data.Routine(
        name='trialweicheng1',
        components=[text_weicheng1, text_13, text_14, key_resp_weicheng1],
    )
    trialweicheng1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_weicheng1
    key_resp_weicheng1.keys = []
    key_resp_weicheng1.rt = []
    _key_resp_weicheng1_allKeys = []
    # store start times for trialweicheng1
    trialweicheng1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialweicheng1.tStart = globalClock.getTime(format='float')
    trialweicheng1.status = STARTED
    thisExp.addData('trialweicheng1.started', trialweicheng1.tStart)
    trialweicheng1.maxDuration = None
    # keep track of which components have finished
    trialweicheng1Components = trialweicheng1.components
    for thisComponent in trialweicheng1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialweicheng1" ---
    trialweicheng1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_weicheng1* updates
        
        # if text_weicheng1 is starting this frame...
        if text_weicheng1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_weicheng1.frameNStart = frameN  # exact frame index
            text_weicheng1.tStart = t  # local t and not account for scr refresh
            text_weicheng1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_weicheng1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_weicheng1.started')
            # update status
            text_weicheng1.status = STARTED
            text_weicheng1.setAutoDraw(True)
        
        # if text_weicheng1 is active this frame...
        if text_weicheng1.status == STARTED:
            # update params
            pass
        
        # if text_weicheng1 is stopping this frame...
        if text_weicheng1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_weicheng1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_weicheng1.tStop = t  # not accounting for scr refresh
                text_weicheng1.tStopRefresh = tThisFlipGlobal  # on global time
                text_weicheng1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_weicheng1.stopped')
                # update status
                text_weicheng1.status = FINISHED
                text_weicheng1.setAutoDraw(False)
        
        # *text_13* updates
        
        # if text_13 is starting this frame...
        if text_13.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_13.frameNStart = frameN  # exact frame index
            text_13.tStart = t  # local t and not account for scr refresh
            text_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_13.started')
            # update status
            text_13.status = STARTED
            text_13.setAutoDraw(True)
        
        # if text_13 is active this frame...
        if text_13.status == STARTED:
            # update params
            pass
        
        # if text_13 is stopping this frame...
        if text_13.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_13.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_13.tStop = t  # not accounting for scr refresh
                text_13.tStopRefresh = tThisFlipGlobal  # on global time
                text_13.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_13.stopped')
                # update status
                text_13.status = FINISHED
                text_13.setAutoDraw(False)
        
        # *text_14* updates
        
        # if text_14 is starting this frame...
        if text_14.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            text_14.frameNStart = frameN  # exact frame index
            text_14.tStart = t  # local t and not account for scr refresh
            text_14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_14, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_14.started')
            # update status
            text_14.status = STARTED
            text_14.setAutoDraw(True)
        
        # if text_14 is active this frame...
        if text_14.status == STARTED:
            # update params
            pass
        
        # if text_14 is stopping this frame...
        if text_14.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_14.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_14.tStop = t  # not accounting for scr refresh
                text_14.tStopRefresh = tThisFlipGlobal  # on global time
                text_14.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_14.stopped')
                # update status
                text_14.status = FINISHED
                text_14.setAutoDraw(False)
        
        # *key_resp_weicheng1* updates
        waitOnFlip = False
        
        # if key_resp_weicheng1 is starting this frame...
        if key_resp_weicheng1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_weicheng1.frameNStart = frameN  # exact frame index
            key_resp_weicheng1.tStart = t  # local t and not account for scr refresh
            key_resp_weicheng1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_weicheng1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_weicheng1.started')
            # update status
            key_resp_weicheng1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_weicheng1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_weicheng1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_weicheng1 is stopping this frame...
        if key_resp_weicheng1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_weicheng1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_weicheng1.tStop = t  # not accounting for scr refresh
                key_resp_weicheng1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_weicheng1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_weicheng1.stopped')
                # update status
                key_resp_weicheng1.status = FINISHED
                key_resp_weicheng1.status = FINISHED
        if key_resp_weicheng1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_weicheng1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_weicheng1_allKeys.extend(theseKeys)
            if len(_key_resp_weicheng1_allKeys):
                key_resp_weicheng1.keys = _key_resp_weicheng1_allKeys[0].name  # just the first key pressed
                key_resp_weicheng1.rt = _key_resp_weicheng1_allKeys[0].rt
                key_resp_weicheng1.duration = _key_resp_weicheng1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialweicheng1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialweicheng1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialweicheng1" ---
    for thisComponent in trialweicheng1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialweicheng1
    trialweicheng1.tStop = globalClock.getTime(format='float')
    trialweicheng1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialweicheng1.stopped', trialweicheng1.tStop)
    # check responses
    if key_resp_weicheng1.keys in ['', [], None]:  # No response was made
        key_resp_weicheng1.keys = None
    thisExp.addData('key_resp_weicheng1.keys',key_resp_weicheng1.keys)
    if key_resp_weicheng1.keys != None:  # we had a response
        thisExp.addData('key_resp_weicheng1.rt', key_resp_weicheng1.rt)
        thisExp.addData('key_resp_weicheng1.duration', key_resp_weicheng1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialweicheng1.maxDurationReached:
        routineTimer.addTime(-trialweicheng1.maxDuration)
    elif trialweicheng1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialhongniu0" ---
    # create an object to store info about Routine trialhongniu0
    trialhongniu0 = data.Routine(
        name='trialhongniu0',
        components=[text_hongniu0, sound_hongniu0, text_15, text_16, key_resp_hongniu0],
    )
    trialhongniu0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_hongniu0.setSound('听力/红牛-普通.wav', secs=3.0, hamming=True)
    sound_hongniu0.setVolume(1.0, log=False)
    sound_hongniu0.seek(0)
    # create starting attributes for key_resp_hongniu0
    key_resp_hongniu0.keys = []
    key_resp_hongniu0.rt = []
    _key_resp_hongniu0_allKeys = []
    # store start times for trialhongniu0
    trialhongniu0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialhongniu0.tStart = globalClock.getTime(format='float')
    trialhongniu0.status = STARTED
    thisExp.addData('trialhongniu0.started', trialhongniu0.tStart)
    trialhongniu0.maxDuration = None
    # keep track of which components have finished
    trialhongniu0Components = trialhongniu0.components
    for thisComponent in trialhongniu0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialhongniu0" ---
    trialhongniu0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_hongniu0* updates
        
        # if text_hongniu0 is starting this frame...
        if text_hongniu0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_hongniu0.frameNStart = frameN  # exact frame index
            text_hongniu0.tStart = t  # local t and not account for scr refresh
            text_hongniu0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_hongniu0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_hongniu0.started')
            # update status
            text_hongniu0.status = STARTED
            text_hongniu0.setAutoDraw(True)
        
        # if text_hongniu0 is active this frame...
        if text_hongniu0.status == STARTED:
            # update params
            pass
        
        # if text_hongniu0 is stopping this frame...
        if text_hongniu0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_hongniu0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_hongniu0.tStop = t  # not accounting for scr refresh
                text_hongniu0.tStopRefresh = tThisFlipGlobal  # on global time
                text_hongniu0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_hongniu0.stopped')
                # update status
                text_hongniu0.status = FINISHED
                text_hongniu0.setAutoDraw(False)
        
        # *sound_hongniu0* updates
        
        # if sound_hongniu0 is starting this frame...
        if sound_hongniu0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_hongniu0.frameNStart = frameN  # exact frame index
            sound_hongniu0.tStart = t  # local t and not account for scr refresh
            sound_hongniu0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_hongniu0.started', tThisFlipGlobal)
            # update status
            sound_hongniu0.status = STARTED
            sound_hongniu0.play(when=win)  # sync with win flip
        
        # if sound_hongniu0 is stopping this frame...
        if sound_hongniu0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_hongniu0.tStartRefresh + 3.0-frameTolerance or sound_hongniu0.isFinished:
                # keep track of stop time/frame for later
                sound_hongniu0.tStop = t  # not accounting for scr refresh
                sound_hongniu0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_hongniu0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_hongniu0.stopped')
                # update status
                sound_hongniu0.status = FINISHED
                sound_hongniu0.stop()
        
        # *text_15* updates
        
        # if text_15 is starting this frame...
        if text_15.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_15.frameNStart = frameN  # exact frame index
            text_15.tStart = t  # local t and not account for scr refresh
            text_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_15, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_15.started')
            # update status
            text_15.status = STARTED
            text_15.setAutoDraw(True)
        
        # if text_15 is active this frame...
        if text_15.status == STARTED:
            # update params
            pass
        
        # if text_15 is stopping this frame...
        if text_15.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_15.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_15.tStop = t  # not accounting for scr refresh
                text_15.tStopRefresh = tThisFlipGlobal  # on global time
                text_15.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_15.stopped')
                # update status
                text_15.status = FINISHED
                text_15.setAutoDraw(False)
        
        # *text_16* updates
        
        # if text_16 is starting this frame...
        if text_16.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_16.frameNStart = frameN  # exact frame index
            text_16.tStart = t  # local t and not account for scr refresh
            text_16.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_16, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_16.started')
            # update status
            text_16.status = STARTED
            text_16.setAutoDraw(True)
        
        # if text_16 is active this frame...
        if text_16.status == STARTED:
            # update params
            pass
        
        # if text_16 is stopping this frame...
        if text_16.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_16.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_16.tStop = t  # not accounting for scr refresh
                text_16.tStopRefresh = tThisFlipGlobal  # on global time
                text_16.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_16.stopped')
                # update status
                text_16.status = FINISHED
                text_16.setAutoDraw(False)
        
        # *key_resp_hongniu0* updates
        waitOnFlip = False
        
        # if key_resp_hongniu0 is starting this frame...
        if key_resp_hongniu0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_hongniu0.frameNStart = frameN  # exact frame index
            key_resp_hongniu0.tStart = t  # local t and not account for scr refresh
            key_resp_hongniu0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_hongniu0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_hongniu0.started')
            # update status
            key_resp_hongniu0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_hongniu0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_hongniu0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_hongniu0 is stopping this frame...
        if key_resp_hongniu0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_hongniu0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_hongniu0.tStop = t  # not accounting for scr refresh
                key_resp_hongniu0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_hongniu0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_hongniu0.stopped')
                # update status
                key_resp_hongniu0.status = FINISHED
                key_resp_hongniu0.status = FINISHED
        if key_resp_hongniu0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_hongniu0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_hongniu0_allKeys.extend(theseKeys)
            if len(_key_resp_hongniu0_allKeys):
                key_resp_hongniu0.keys = _key_resp_hongniu0_allKeys[-1].name  # just the last key pressed
                key_resp_hongniu0.rt = _key_resp_hongniu0_allKeys[-1].rt
                key_resp_hongniu0.duration = _key_resp_hongniu0_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_hongniu0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialhongniu0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialhongniu0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialhongniu0" ---
    for thisComponent in trialhongniu0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialhongniu0
    trialhongniu0.tStop = globalClock.getTime(format='float')
    trialhongniu0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialhongniu0.stopped', trialhongniu0.tStop)
    sound_hongniu0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_hongniu0.keys in ['', [], None]:  # No response was made
        key_resp_hongniu0.keys = None
    thisExp.addData('key_resp_hongniu0.keys',key_resp_hongniu0.keys)
    if key_resp_hongniu0.keys != None:  # we had a response
        thisExp.addData('key_resp_hongniu0.rt', key_resp_hongniu0.rt)
        thisExp.addData('key_resp_hongniu0.duration', key_resp_hongniu0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialhongniu0.maxDurationReached:
        routineTimer.addTime(-trialhongniu0.maxDuration)
    elif trialhongniu0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialruodian1" ---
    # create an object to store info about Routine trialruodian1
    trialruodian1 = data.Routine(
        name='trialruodian1',
        components=[text_ruodian1, sound_ruodian1, text_19, text_20, key_resp_ruodian1],
    )
    trialruodian1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_ruodian1.setSound('听力/弱点-专有.wav', secs=3.0, hamming=True)
    sound_ruodian1.setVolume(1.0, log=False)
    sound_ruodian1.seek(0)
    # create starting attributes for key_resp_ruodian1
    key_resp_ruodian1.keys = []
    key_resp_ruodian1.rt = []
    _key_resp_ruodian1_allKeys = []
    # store start times for trialruodian1
    trialruodian1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialruodian1.tStart = globalClock.getTime(format='float')
    trialruodian1.status = STARTED
    thisExp.addData('trialruodian1.started', trialruodian1.tStart)
    trialruodian1.maxDuration = None
    # keep track of which components have finished
    trialruodian1Components = trialruodian1.components
    for thisComponent in trialruodian1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialruodian1" ---
    trialruodian1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_ruodian1* updates
        
        # if text_ruodian1 is starting this frame...
        if text_ruodian1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_ruodian1.frameNStart = frameN  # exact frame index
            text_ruodian1.tStart = t  # local t and not account for scr refresh
            text_ruodian1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_ruodian1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_ruodian1.started')
            # update status
            text_ruodian1.status = STARTED
            text_ruodian1.setAutoDraw(True)
        
        # if text_ruodian1 is active this frame...
        if text_ruodian1.status == STARTED:
            # update params
            pass
        
        # if text_ruodian1 is stopping this frame...
        if text_ruodian1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_ruodian1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_ruodian1.tStop = t  # not accounting for scr refresh
                text_ruodian1.tStopRefresh = tThisFlipGlobal  # on global time
                text_ruodian1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_ruodian1.stopped')
                # update status
                text_ruodian1.status = FINISHED
                text_ruodian1.setAutoDraw(False)
        
        # *sound_ruodian1* updates
        
        # if sound_ruodian1 is starting this frame...
        if sound_ruodian1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_ruodian1.frameNStart = frameN  # exact frame index
            sound_ruodian1.tStart = t  # local t and not account for scr refresh
            sound_ruodian1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_ruodian1.started', tThisFlipGlobal)
            # update status
            sound_ruodian1.status = STARTED
            sound_ruodian1.play(when=win)  # sync with win flip
        
        # if sound_ruodian1 is stopping this frame...
        if sound_ruodian1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_ruodian1.tStartRefresh + 3.0-frameTolerance or sound_ruodian1.isFinished:
                # keep track of stop time/frame for later
                sound_ruodian1.tStop = t  # not accounting for scr refresh
                sound_ruodian1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_ruodian1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_ruodian1.stopped')
                # update status
                sound_ruodian1.status = FINISHED
                sound_ruodian1.stop()
        
        # *text_19* updates
        
        # if text_19 is starting this frame...
        if text_19.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_19.frameNStart = frameN  # exact frame index
            text_19.tStart = t  # local t and not account for scr refresh
            text_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_19, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_19.started')
            # update status
            text_19.status = STARTED
            text_19.setAutoDraw(True)
        
        # if text_19 is active this frame...
        if text_19.status == STARTED:
            # update params
            pass
        
        # if text_19 is stopping this frame...
        if text_19.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_19.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_19.tStop = t  # not accounting for scr refresh
                text_19.tStopRefresh = tThisFlipGlobal  # on global time
                text_19.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_19.stopped')
                # update status
                text_19.status = FINISHED
                text_19.setAutoDraw(False)
        
        # *text_20* updates
        
        # if text_20 is starting this frame...
        if text_20.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_20.frameNStart = frameN  # exact frame index
            text_20.tStart = t  # local t and not account for scr refresh
            text_20.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_20, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_20.started')
            # update status
            text_20.status = STARTED
            text_20.setAutoDraw(True)
        
        # if text_20 is active this frame...
        if text_20.status == STARTED:
            # update params
            pass
        
        # if text_20 is stopping this frame...
        if text_20.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_20.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_20.tStop = t  # not accounting for scr refresh
                text_20.tStopRefresh = tThisFlipGlobal  # on global time
                text_20.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_20.stopped')
                # update status
                text_20.status = FINISHED
                text_20.setAutoDraw(False)
        
        # *key_resp_ruodian1* updates
        waitOnFlip = False
        
        # if key_resp_ruodian1 is starting this frame...
        if key_resp_ruodian1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_ruodian1.frameNStart = frameN  # exact frame index
            key_resp_ruodian1.tStart = t  # local t and not account for scr refresh
            key_resp_ruodian1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_ruodian1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_ruodian1.started')
            # update status
            key_resp_ruodian1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_ruodian1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_ruodian1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_ruodian1 is stopping this frame...
        if key_resp_ruodian1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_ruodian1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_ruodian1.tStop = t  # not accounting for scr refresh
                key_resp_ruodian1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_ruodian1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_ruodian1.stopped')
                # update status
                key_resp_ruodian1.status = FINISHED
                key_resp_ruodian1.status = FINISHED
        if key_resp_ruodian1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_ruodian1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_ruodian1_allKeys.extend(theseKeys)
            if len(_key_resp_ruodian1_allKeys):
                key_resp_ruodian1.keys = _key_resp_ruodian1_allKeys[0].name  # just the first key pressed
                key_resp_ruodian1.rt = _key_resp_ruodian1_allKeys[0].rt
                key_resp_ruodian1.duration = _key_resp_ruodian1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_ruodian1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialruodian1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialruodian1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialruodian1" ---
    for thisComponent in trialruodian1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialruodian1
    trialruodian1.tStop = globalClock.getTime(format='float')
    trialruodian1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialruodian1.stopped', trialruodian1.tStop)
    sound_ruodian1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_ruodian1.keys in ['', [], None]:  # No response was made
        key_resp_ruodian1.keys = None
    thisExp.addData('key_resp_ruodian1.keys',key_resp_ruodian1.keys)
    if key_resp_ruodian1.keys != None:  # we had a response
        thisExp.addData('key_resp_ruodian1.rt', key_resp_ruodian1.rt)
        thisExp.addData('key_resp_ruodian1.duration', key_resp_ruodian1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialruodian1.maxDurationReached:
        routineTimer.addTime(-trialruodian1.maxDuration)
    elif trialruodian1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialleshi0_3" ---
    # create an object to store info about Routine trialleshi0_3
    trialleshi0_3 = data.Routine(
        name='trialleshi0_3',
        components=[leshi0, sound_leshi0, text1_leshi0, text_17, key_resp_leshi0],
    )
    trialleshi0_3.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_leshi0.setSound('听力/乐事-普通.wav', secs=3.0, hamming=True)
    sound_leshi0.setVolume(1.0, log=False)
    sound_leshi0.seek(0)
    # create starting attributes for key_resp_leshi0
    key_resp_leshi0.keys = []
    key_resp_leshi0.rt = []
    _key_resp_leshi0_allKeys = []
    # store start times for trialleshi0_3
    trialleshi0_3.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialleshi0_3.tStart = globalClock.getTime(format='float')
    trialleshi0_3.status = STARTED
    thisExp.addData('trialleshi0_3.started', trialleshi0_3.tStart)
    trialleshi0_3.maxDuration = None
    # keep track of which components have finished
    trialleshi0_3Components = trialleshi0_3.components
    for thisComponent in trialleshi0_3.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialleshi0_3" ---
    trialleshi0_3.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *leshi0* updates
        
        # if leshi0 is starting this frame...
        if leshi0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            leshi0.frameNStart = frameN  # exact frame index
            leshi0.tStart = t  # local t and not account for scr refresh
            leshi0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(leshi0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'leshi0.started')
            # update status
            leshi0.status = STARTED
            leshi0.setAutoDraw(True)
        
        # if leshi0 is active this frame...
        if leshi0.status == STARTED:
            # update params
            pass
        
        # if leshi0 is stopping this frame...
        if leshi0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > leshi0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                leshi0.tStop = t  # not accounting for scr refresh
                leshi0.tStopRefresh = tThisFlipGlobal  # on global time
                leshi0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'leshi0.stopped')
                # update status
                leshi0.status = FINISHED
                leshi0.setAutoDraw(False)
        
        # *sound_leshi0* updates
        
        # if sound_leshi0 is starting this frame...
        if sound_leshi0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_leshi0.frameNStart = frameN  # exact frame index
            sound_leshi0.tStart = t  # local t and not account for scr refresh
            sound_leshi0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_leshi0.started', tThisFlipGlobal)
            # update status
            sound_leshi0.status = STARTED
            sound_leshi0.play(when=win)  # sync with win flip
        
        # if sound_leshi0 is stopping this frame...
        if sound_leshi0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_leshi0.tStartRefresh + 3.0-frameTolerance or sound_leshi0.isFinished:
                # keep track of stop time/frame for later
                sound_leshi0.tStop = t  # not accounting for scr refresh
                sound_leshi0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_leshi0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_leshi0.stopped')
                # update status
                sound_leshi0.status = FINISHED
                sound_leshi0.stop()
        
        # *text1_leshi0* updates
        
        # if text1_leshi0 is starting this frame...
        if text1_leshi0.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text1_leshi0.frameNStart = frameN  # exact frame index
            text1_leshi0.tStart = t  # local t and not account for scr refresh
            text1_leshi0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text1_leshi0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text1_leshi0.started')
            # update status
            text1_leshi0.status = STARTED
            text1_leshi0.setAutoDraw(True)
        
        # if text1_leshi0 is active this frame...
        if text1_leshi0.status == STARTED:
            # update params
            pass
        
        # if text1_leshi0 is stopping this frame...
        if text1_leshi0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text1_leshi0.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text1_leshi0.tStop = t  # not accounting for scr refresh
                text1_leshi0.tStopRefresh = tThisFlipGlobal  # on global time
                text1_leshi0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text1_leshi0.stopped')
                # update status
                text1_leshi0.status = FINISHED
                text1_leshi0.setAutoDraw(False)
        
        # *text_17* updates
        
        # if text_17 is starting this frame...
        if text_17.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_17.frameNStart = frameN  # exact frame index
            text_17.tStart = t  # local t and not account for scr refresh
            text_17.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_17.started')
            # update status
            text_17.status = STARTED
            text_17.setAutoDraw(True)
        
        # if text_17 is active this frame...
        if text_17.status == STARTED:
            # update params
            pass
        
        # if text_17 is stopping this frame...
        if text_17.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_17.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_17.tStop = t  # not accounting for scr refresh
                text_17.tStopRefresh = tThisFlipGlobal  # on global time
                text_17.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_17.stopped')
                # update status
                text_17.status = FINISHED
                text_17.setAutoDraw(False)
        
        # *key_resp_leshi0* updates
        waitOnFlip = False
        
        # if key_resp_leshi0 is starting this frame...
        if key_resp_leshi0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_leshi0.frameNStart = frameN  # exact frame index
            key_resp_leshi0.tStart = t  # local t and not account for scr refresh
            key_resp_leshi0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_leshi0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_leshi0.started')
            # update status
            key_resp_leshi0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_leshi0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_leshi0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_leshi0 is stopping this frame...
        if key_resp_leshi0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_leshi0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_leshi0.tStop = t  # not accounting for scr refresh
                key_resp_leshi0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_leshi0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_leshi0.stopped')
                # update status
                key_resp_leshi0.status = FINISHED
                key_resp_leshi0.status = FINISHED
        if key_resp_leshi0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_leshi0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_leshi0_allKeys.extend(theseKeys)
            if len(_key_resp_leshi0_allKeys):
                key_resp_leshi0.keys = _key_resp_leshi0_allKeys[0].name  # just the first key pressed
                key_resp_leshi0.rt = _key_resp_leshi0_allKeys[0].rt
                key_resp_leshi0.duration = _key_resp_leshi0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_leshi0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialleshi0_3.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialleshi0_3.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialleshi0_3" ---
    for thisComponent in trialleshi0_3.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialleshi0_3
    trialleshi0_3.tStop = globalClock.getTime(format='float')
    trialleshi0_3.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialleshi0_3.stopped', trialleshi0_3.tStop)
    sound_leshi0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_leshi0.keys in ['', [], None]:  # No response was made
        key_resp_leshi0.keys = None
    thisExp.addData('key_resp_leshi0.keys',key_resp_leshi0.keys)
    if key_resp_leshi0.keys != None:  # we had a response
        thisExp.addData('key_resp_leshi0.rt', key_resp_leshi0.rt)
        thisExp.addData('key_resp_leshi0.duration', key_resp_leshi0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialleshi0_3.maxDurationReached:
        routineTimer.addTime(-trialleshi0_3.maxDuration)
    elif trialleshi0_3.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialhongqi1" ---
    # create an object to store info about Routine trialhongqi1
    trialhongqi1 = data.Routine(
        name='trialhongqi1',
        components=[text_hongqi1, sound_hongqi1, text_1ruodian1, text_18, key_resp_hongqi1],
    )
    trialhongqi1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_hongqi1.setSound('听力/红旗-专有.wav', secs=3.0, hamming=True)
    sound_hongqi1.setVolume(1.0, log=False)
    sound_hongqi1.seek(0)
    # create starting attributes for key_resp_hongqi1
    key_resp_hongqi1.keys = []
    key_resp_hongqi1.rt = []
    _key_resp_hongqi1_allKeys = []
    # store start times for trialhongqi1
    trialhongqi1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialhongqi1.tStart = globalClock.getTime(format='float')
    trialhongqi1.status = STARTED
    thisExp.addData('trialhongqi1.started', trialhongqi1.tStart)
    trialhongqi1.maxDuration = None
    # keep track of which components have finished
    trialhongqi1Components = trialhongqi1.components
    for thisComponent in trialhongqi1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialhongqi1" ---
    trialhongqi1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_hongqi1* updates
        
        # if text_hongqi1 is starting this frame...
        if text_hongqi1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_hongqi1.frameNStart = frameN  # exact frame index
            text_hongqi1.tStart = t  # local t and not account for scr refresh
            text_hongqi1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_hongqi1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_hongqi1.started')
            # update status
            text_hongqi1.status = STARTED
            text_hongqi1.setAutoDraw(True)
        
        # if text_hongqi1 is active this frame...
        if text_hongqi1.status == STARTED:
            # update params
            pass
        
        # if text_hongqi1 is stopping this frame...
        if text_hongqi1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_hongqi1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_hongqi1.tStop = t  # not accounting for scr refresh
                text_hongqi1.tStopRefresh = tThisFlipGlobal  # on global time
                text_hongqi1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_hongqi1.stopped')
                # update status
                text_hongqi1.status = FINISHED
                text_hongqi1.setAutoDraw(False)
        
        # *sound_hongqi1* updates
        
        # if sound_hongqi1 is starting this frame...
        if sound_hongqi1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_hongqi1.frameNStart = frameN  # exact frame index
            sound_hongqi1.tStart = t  # local t and not account for scr refresh
            sound_hongqi1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_hongqi1.started', tThisFlipGlobal)
            # update status
            sound_hongqi1.status = STARTED
            sound_hongqi1.play(when=win)  # sync with win flip
        
        # if sound_hongqi1 is stopping this frame...
        if sound_hongqi1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_hongqi1.tStartRefresh + 3.0-frameTolerance or sound_hongqi1.isFinished:
                # keep track of stop time/frame for later
                sound_hongqi1.tStop = t  # not accounting for scr refresh
                sound_hongqi1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_hongqi1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_hongqi1.stopped')
                # update status
                sound_hongqi1.status = FINISHED
                sound_hongqi1.stop()
        
        # *text_1ruodian1* updates
        
        # if text_1ruodian1 is starting this frame...
        if text_1ruodian1.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_1ruodian1.frameNStart = frameN  # exact frame index
            text_1ruodian1.tStart = t  # local t and not account for scr refresh
            text_1ruodian1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_1ruodian1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_1ruodian1.started')
            # update status
            text_1ruodian1.status = STARTED
            text_1ruodian1.setAutoDraw(True)
        
        # if text_1ruodian1 is active this frame...
        if text_1ruodian1.status == STARTED:
            # update params
            pass
        
        # if text_1ruodian1 is stopping this frame...
        if text_1ruodian1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_1ruodian1.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_1ruodian1.tStop = t  # not accounting for scr refresh
                text_1ruodian1.tStopRefresh = tThisFlipGlobal  # on global time
                text_1ruodian1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_1ruodian1.stopped')
                # update status
                text_1ruodian1.status = FINISHED
                text_1ruodian1.setAutoDraw(False)
        
        # *text_18* updates
        
        # if text_18 is starting this frame...
        if text_18.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_18.frameNStart = frameN  # exact frame index
            text_18.tStart = t  # local t and not account for scr refresh
            text_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_18, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_18.started')
            # update status
            text_18.status = STARTED
            text_18.setAutoDraw(True)
        
        # if text_18 is active this frame...
        if text_18.status == STARTED:
            # update params
            pass
        
        # if text_18 is stopping this frame...
        if text_18.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_18.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_18.tStop = t  # not accounting for scr refresh
                text_18.tStopRefresh = tThisFlipGlobal  # on global time
                text_18.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_18.stopped')
                # update status
                text_18.status = FINISHED
                text_18.setAutoDraw(False)
        
        # *key_resp_hongqi1* updates
        waitOnFlip = False
        
        # if key_resp_hongqi1 is starting this frame...
        if key_resp_hongqi1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_hongqi1.frameNStart = frameN  # exact frame index
            key_resp_hongqi1.tStart = t  # local t and not account for scr refresh
            key_resp_hongqi1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_hongqi1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_hongqi1.started')
            # update status
            key_resp_hongqi1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_hongqi1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_hongqi1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_hongqi1 is stopping this frame...
        if key_resp_hongqi1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_hongqi1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_hongqi1.tStop = t  # not accounting for scr refresh
                key_resp_hongqi1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_hongqi1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_hongqi1.stopped')
                # update status
                key_resp_hongqi1.status = FINISHED
                key_resp_hongqi1.status = FINISHED
        if key_resp_hongqi1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_hongqi1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_hongqi1_allKeys.extend(theseKeys)
            if len(_key_resp_hongqi1_allKeys):
                key_resp_hongqi1.keys = _key_resp_hongqi1_allKeys[0].name  # just the first key pressed
                key_resp_hongqi1.rt = _key_resp_hongqi1_allKeys[0].rt
                key_resp_hongqi1.duration = _key_resp_hongqi1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_hongqi1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialhongqi1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialhongqi1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialhongqi1" ---
    for thisComponent in trialhongqi1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialhongqi1
    trialhongqi1.tStop = globalClock.getTime(format='float')
    trialhongqi1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialhongqi1.stopped', trialhongqi1.tStop)
    sound_hongqi1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_hongqi1.keys in ['', [], None]:  # No response was made
        key_resp_hongqi1.keys = None
    thisExp.addData('key_resp_hongqi1.keys',key_resp_hongqi1.keys)
    if key_resp_hongqi1.keys != None:  # we had a response
        thisExp.addData('key_resp_hongqi1.rt', key_resp_hongqi1.rt)
        thisExp.addData('key_resp_hongqi1.duration', key_resp_hongqi1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialhongqi1.maxDurationReached:
        routineTimer.addTime(-trialhongqi1.maxDuration)
    elif trialhongqi1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialnanhai1" ---
    # create an object to store info about Routine trialnanhai1
    trialnanhai1 = data.Routine(
        name='trialnanhai1',
        components=[text_nanhai1, sound_nanhai1, text_21, text_22, key_resp_2],
    )
    trialnanhai1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_nanhai1.setSound('听力/男孩-专有.wav', secs=3.0, hamming=True)
    sound_nanhai1.setVolume(1.0, log=False)
    sound_nanhai1.seek(0)
    # create starting attributes for key_resp_2
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # store start times for trialnanhai1
    trialnanhai1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialnanhai1.tStart = globalClock.getTime(format='float')
    trialnanhai1.status = STARTED
    thisExp.addData('trialnanhai1.started', trialnanhai1.tStart)
    trialnanhai1.maxDuration = None
    # keep track of which components have finished
    trialnanhai1Components = trialnanhai1.components
    for thisComponent in trialnanhai1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialnanhai1" ---
    trialnanhai1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_nanhai1* updates
        
        # if text_nanhai1 is starting this frame...
        if text_nanhai1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_nanhai1.frameNStart = frameN  # exact frame index
            text_nanhai1.tStart = t  # local t and not account for scr refresh
            text_nanhai1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_nanhai1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_nanhai1.started')
            # update status
            text_nanhai1.status = STARTED
            text_nanhai1.setAutoDraw(True)
        
        # if text_nanhai1 is active this frame...
        if text_nanhai1.status == STARTED:
            # update params
            pass
        
        # if text_nanhai1 is stopping this frame...
        if text_nanhai1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_nanhai1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_nanhai1.tStop = t  # not accounting for scr refresh
                text_nanhai1.tStopRefresh = tThisFlipGlobal  # on global time
                text_nanhai1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_nanhai1.stopped')
                # update status
                text_nanhai1.status = FINISHED
                text_nanhai1.setAutoDraw(False)
        
        # *sound_nanhai1* updates
        
        # if sound_nanhai1 is starting this frame...
        if sound_nanhai1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_nanhai1.frameNStart = frameN  # exact frame index
            sound_nanhai1.tStart = t  # local t and not account for scr refresh
            sound_nanhai1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_nanhai1.started', tThisFlipGlobal)
            # update status
            sound_nanhai1.status = STARTED
            sound_nanhai1.play(when=win)  # sync with win flip
        
        # if sound_nanhai1 is stopping this frame...
        if sound_nanhai1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_nanhai1.tStartRefresh + 3.0-frameTolerance or sound_nanhai1.isFinished:
                # keep track of stop time/frame for later
                sound_nanhai1.tStop = t  # not accounting for scr refresh
                sound_nanhai1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_nanhai1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_nanhai1.stopped')
                # update status
                sound_nanhai1.status = FINISHED
                sound_nanhai1.stop()
        
        # *text_21* updates
        
        # if text_21 is starting this frame...
        if text_21.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_21.frameNStart = frameN  # exact frame index
            text_21.tStart = t  # local t and not account for scr refresh
            text_21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_21, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_21.started')
            # update status
            text_21.status = STARTED
            text_21.setAutoDraw(True)
        
        # if text_21 is active this frame...
        if text_21.status == STARTED:
            # update params
            pass
        
        # if text_21 is stopping this frame...
        if text_21.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_21.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_21.tStop = t  # not accounting for scr refresh
                text_21.tStopRefresh = tThisFlipGlobal  # on global time
                text_21.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_21.stopped')
                # update status
                text_21.status = FINISHED
                text_21.setAutoDraw(False)
        
        # *text_22* updates
        
        # if text_22 is starting this frame...
        if text_22.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_22.frameNStart = frameN  # exact frame index
            text_22.tStart = t  # local t and not account for scr refresh
            text_22.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_22, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_22.started')
            # update status
            text_22.status = STARTED
            text_22.setAutoDraw(True)
        
        # if text_22 is active this frame...
        if text_22.status == STARTED:
            # update params
            pass
        
        # if text_22 is stopping this frame...
        if text_22.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_22.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_22.tStop = t  # not accounting for scr refresh
                text_22.tStopRefresh = tThisFlipGlobal  # on global time
                text_22.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_22.stopped')
                # update status
                text_22.status = FINISHED
                text_22.setAutoDraw(False)
        
        # *key_resp_2* updates
        waitOnFlip = False
        
        # if key_resp_2 is starting this frame...
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_2.started')
            # update status
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_2 is stopping this frame...
        if key_resp_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_2.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_2.tStop = t  # not accounting for scr refresh
                key_resp_2.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_2.stopped')
                # update status
                key_resp_2.status = FINISHED
                key_resp_2.status = FINISHED
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[0].name  # just the first key pressed
                key_resp_2.rt = _key_resp_2_allKeys[0].rt
                key_resp_2.duration = _key_resp_2_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_nanhai1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialnanhai1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialnanhai1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialnanhai1" ---
    for thisComponent in trialnanhai1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialnanhai1
    trialnanhai1.tStop = globalClock.getTime(format='float')
    trialnanhai1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialnanhai1.stopped', trialnanhai1.tStop)
    sound_nanhai1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    thisExp.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        thisExp.addData('key_resp_2.rt', key_resp_2.rt)
        thisExp.addData('key_resp_2.duration', key_resp_2.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialnanhai1.maxDurationReached:
        routineTimer.addTime(-trialnanhai1.maxDuration)
    elif trialnanhai1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialqingshu1" ---
    # create an object to store info about Routine trialqingshu1
    trialqingshu1 = data.Routine(
        name='trialqingshu1',
        components=[text_qingshu1, sound_qingshu1, text_23, text_24, key_resp_3],
    )
    trialqingshu1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_qingshu1.setSound('听力/情书-专有.wav', secs=3.0, hamming=True)
    sound_qingshu1.setVolume(1.0, log=False)
    sound_qingshu1.seek(0)
    # create starting attributes for key_resp_3
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # store start times for trialqingshu1
    trialqingshu1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialqingshu1.tStart = globalClock.getTime(format='float')
    trialqingshu1.status = STARTED
    thisExp.addData('trialqingshu1.started', trialqingshu1.tStart)
    trialqingshu1.maxDuration = None
    # keep track of which components have finished
    trialqingshu1Components = trialqingshu1.components
    for thisComponent in trialqingshu1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialqingshu1" ---
    trialqingshu1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_qingshu1* updates
        
        # if text_qingshu1 is starting this frame...
        if text_qingshu1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_qingshu1.frameNStart = frameN  # exact frame index
            text_qingshu1.tStart = t  # local t and not account for scr refresh
            text_qingshu1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_qingshu1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_qingshu1.started')
            # update status
            text_qingshu1.status = STARTED
            text_qingshu1.setAutoDraw(True)
        
        # if text_qingshu1 is active this frame...
        if text_qingshu1.status == STARTED:
            # update params
            pass
        
        # if text_qingshu1 is stopping this frame...
        if text_qingshu1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_qingshu1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_qingshu1.tStop = t  # not accounting for scr refresh
                text_qingshu1.tStopRefresh = tThisFlipGlobal  # on global time
                text_qingshu1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_qingshu1.stopped')
                # update status
                text_qingshu1.status = FINISHED
                text_qingshu1.setAutoDraw(False)
        
        # *sound_qingshu1* updates
        
        # if sound_qingshu1 is starting this frame...
        if sound_qingshu1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_qingshu1.frameNStart = frameN  # exact frame index
            sound_qingshu1.tStart = t  # local t and not account for scr refresh
            sound_qingshu1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_qingshu1.started', tThisFlipGlobal)
            # update status
            sound_qingshu1.status = STARTED
            sound_qingshu1.play(when=win)  # sync with win flip
        
        # if sound_qingshu1 is stopping this frame...
        if sound_qingshu1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_qingshu1.tStartRefresh + 3.0-frameTolerance or sound_qingshu1.isFinished:
                # keep track of stop time/frame for later
                sound_qingshu1.tStop = t  # not accounting for scr refresh
                sound_qingshu1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_qingshu1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_qingshu1.stopped')
                # update status
                sound_qingshu1.status = FINISHED
                sound_qingshu1.stop()
        
        # *text_23* updates
        
        # if text_23 is starting this frame...
        if text_23.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_23.frameNStart = frameN  # exact frame index
            text_23.tStart = t  # local t and not account for scr refresh
            text_23.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_23, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_23.started')
            # update status
            text_23.status = STARTED
            text_23.setAutoDraw(True)
        
        # if text_23 is active this frame...
        if text_23.status == STARTED:
            # update params
            pass
        
        # if text_23 is stopping this frame...
        if text_23.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_23.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_23.tStop = t  # not accounting for scr refresh
                text_23.tStopRefresh = tThisFlipGlobal  # on global time
                text_23.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_23.stopped')
                # update status
                text_23.status = FINISHED
                text_23.setAutoDraw(False)
        
        # *text_24* updates
        
        # if text_24 is starting this frame...
        if text_24.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_24.frameNStart = frameN  # exact frame index
            text_24.tStart = t  # local t and not account for scr refresh
            text_24.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_24, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_24.started')
            # update status
            text_24.status = STARTED
            text_24.setAutoDraw(True)
        
        # if text_24 is active this frame...
        if text_24.status == STARTED:
            # update params
            pass
        
        # if text_24 is stopping this frame...
        if text_24.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_24.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_24.tStop = t  # not accounting for scr refresh
                text_24.tStopRefresh = tThisFlipGlobal  # on global time
                text_24.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_24.stopped')
                # update status
                text_24.status = FINISHED
                text_24.setAutoDraw(False)
        
        # *key_resp_3* updates
        waitOnFlip = False
        
        # if key_resp_3 is starting this frame...
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_3.started')
            # update status
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_3 is stopping this frame...
        if key_resp_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_3.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_3.tStop = t  # not accounting for scr refresh
                key_resp_3.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_3.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_3.stopped')
                # update status
                key_resp_3.status = FINISHED
                key_resp_3.status = FINISHED
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_3_allKeys.extend(theseKeys)
            if len(_key_resp_3_allKeys):
                key_resp_3.keys = _key_resp_3_allKeys[0].name  # just the first key pressed
                key_resp_3.rt = _key_resp_3_allKeys[0].rt
                key_resp_3.duration = _key_resp_3_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_qingshu1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialqingshu1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialqingshu1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialqingshu1" ---
    for thisComponent in trialqingshu1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialqingshu1
    trialqingshu1.tStop = globalClock.getTime(format='float')
    trialqingshu1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialqingshu1.stopped', trialqingshu1.tStop)
    sound_qingshu1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_3.keys in ['', [], None]:  # No response was made
        key_resp_3.keys = None
    thisExp.addData('key_resp_3.keys',key_resp_3.keys)
    if key_resp_3.keys != None:  # we had a response
        thisExp.addData('key_resp_3.rt', key_resp_3.rt)
        thisExp.addData('key_resp_3.duration', key_resp_3.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialqingshu1.maxDurationReached:
        routineTimer.addTime(-trialqingshu1.maxDuration)
    elif trialqingshu1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialnvhai1" ---
    # create an object to store info about Routine trialnvhai1
    trialnvhai1 = data.Routine(
        name='trialnvhai1',
        components=[text_nvhai1, sound_nvhai1, text_25, text_26, key_resp_nvhai1],
    )
    trialnvhai1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_nvhai1.setSound('听力/女孩-专有.wav', secs=3.0, hamming=True)
    sound_nvhai1.setVolume(1.0, log=False)
    sound_nvhai1.seek(0)
    # create starting attributes for key_resp_nvhai1
    key_resp_nvhai1.keys = []
    key_resp_nvhai1.rt = []
    _key_resp_nvhai1_allKeys = []
    # store start times for trialnvhai1
    trialnvhai1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialnvhai1.tStart = globalClock.getTime(format='float')
    trialnvhai1.status = STARTED
    thisExp.addData('trialnvhai1.started', trialnvhai1.tStart)
    trialnvhai1.maxDuration = None
    # keep track of which components have finished
    trialnvhai1Components = trialnvhai1.components
    for thisComponent in trialnvhai1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialnvhai1" ---
    trialnvhai1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_nvhai1* updates
        
        # if text_nvhai1 is starting this frame...
        if text_nvhai1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_nvhai1.frameNStart = frameN  # exact frame index
            text_nvhai1.tStart = t  # local t and not account for scr refresh
            text_nvhai1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_nvhai1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_nvhai1.started')
            # update status
            text_nvhai1.status = STARTED
            text_nvhai1.setAutoDraw(True)
        
        # if text_nvhai1 is active this frame...
        if text_nvhai1.status == STARTED:
            # update params
            pass
        
        # if text_nvhai1 is stopping this frame...
        if text_nvhai1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_nvhai1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_nvhai1.tStop = t  # not accounting for scr refresh
                text_nvhai1.tStopRefresh = tThisFlipGlobal  # on global time
                text_nvhai1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_nvhai1.stopped')
                # update status
                text_nvhai1.status = FINISHED
                text_nvhai1.setAutoDraw(False)
        
        # *sound_nvhai1* updates
        
        # if sound_nvhai1 is starting this frame...
        if sound_nvhai1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_nvhai1.frameNStart = frameN  # exact frame index
            sound_nvhai1.tStart = t  # local t and not account for scr refresh
            sound_nvhai1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_nvhai1.started', tThisFlipGlobal)
            # update status
            sound_nvhai1.status = STARTED
            sound_nvhai1.play(when=win)  # sync with win flip
        
        # if sound_nvhai1 is stopping this frame...
        if sound_nvhai1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_nvhai1.tStartRefresh + 3.0-frameTolerance or sound_nvhai1.isFinished:
                # keep track of stop time/frame for later
                sound_nvhai1.tStop = t  # not accounting for scr refresh
                sound_nvhai1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_nvhai1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_nvhai1.stopped')
                # update status
                sound_nvhai1.status = FINISHED
                sound_nvhai1.stop()
        
        # *text_25* updates
        
        # if text_25 is starting this frame...
        if text_25.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_25.frameNStart = frameN  # exact frame index
            text_25.tStart = t  # local t and not account for scr refresh
            text_25.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_25, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_25.started')
            # update status
            text_25.status = STARTED
            text_25.setAutoDraw(True)
        
        # if text_25 is active this frame...
        if text_25.status == STARTED:
            # update params
            pass
        
        # if text_25 is stopping this frame...
        if text_25.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_25.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_25.tStop = t  # not accounting for scr refresh
                text_25.tStopRefresh = tThisFlipGlobal  # on global time
                text_25.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_25.stopped')
                # update status
                text_25.status = FINISHED
                text_25.setAutoDraw(False)
        
        # *text_26* updates
        
        # if text_26 is starting this frame...
        if text_26.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_26.frameNStart = frameN  # exact frame index
            text_26.tStart = t  # local t and not account for scr refresh
            text_26.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_26, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_26.started')
            # update status
            text_26.status = STARTED
            text_26.setAutoDraw(True)
        
        # if text_26 is active this frame...
        if text_26.status == STARTED:
            # update params
            pass
        
        # if text_26 is stopping this frame...
        if text_26.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_26.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_26.tStop = t  # not accounting for scr refresh
                text_26.tStopRefresh = tThisFlipGlobal  # on global time
                text_26.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_26.stopped')
                # update status
                text_26.status = FINISHED
                text_26.setAutoDraw(False)
        
        # *key_resp_nvhai1* updates
        waitOnFlip = False
        
        # if key_resp_nvhai1 is starting this frame...
        if key_resp_nvhai1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_nvhai1.frameNStart = frameN  # exact frame index
            key_resp_nvhai1.tStart = t  # local t and not account for scr refresh
            key_resp_nvhai1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_nvhai1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_nvhai1.started')
            # update status
            key_resp_nvhai1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_nvhai1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_nvhai1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_nvhai1 is stopping this frame...
        if key_resp_nvhai1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_nvhai1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_nvhai1.tStop = t  # not accounting for scr refresh
                key_resp_nvhai1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_nvhai1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_nvhai1.stopped')
                # update status
                key_resp_nvhai1.status = FINISHED
                key_resp_nvhai1.status = FINISHED
        if key_resp_nvhai1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_nvhai1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_nvhai1_allKeys.extend(theseKeys)
            if len(_key_resp_nvhai1_allKeys):
                key_resp_nvhai1.keys = _key_resp_nvhai1_allKeys[0].name  # just the first key pressed
                key_resp_nvhai1.rt = _key_resp_nvhai1_allKeys[0].rt
                key_resp_nvhai1.duration = _key_resp_nvhai1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_nvhai1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialnvhai1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialnvhai1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialnvhai1" ---
    for thisComponent in trialnvhai1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialnvhai1
    trialnvhai1.tStop = globalClock.getTime(format='float')
    trialnvhai1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialnvhai1.stopped', trialnvhai1.tStop)
    sound_nvhai1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_nvhai1.keys in ['', [], None]:  # No response was made
        key_resp_nvhai1.keys = None
    thisExp.addData('key_resp_nvhai1.keys',key_resp_nvhai1.keys)
    if key_resp_nvhai1.keys != None:  # we had a response
        thisExp.addData('key_resp_nvhai1.rt', key_resp_nvhai1.rt)
        thisExp.addData('key_resp_nvhai1.duration', key_resp_nvhai1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialnvhai1.maxDurationReached:
        routineTimer.addTime(-trialnvhai1.maxDuration)
    elif trialnvhai1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialbaoma1" ---
    # create an object to store info about Routine trialbaoma1
    trialbaoma1 = data.Routine(
        name='trialbaoma1',
        components=[text_baoma1, sound_baoma1, text_27, text_28, key_resp_baoma1],
    )
    trialbaoma1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_baoma1.setSound('听力/宝马-专有.wav', secs=3.0, hamming=True)
    sound_baoma1.setVolume(1.0, log=False)
    sound_baoma1.seek(0)
    # create starting attributes for key_resp_baoma1
    key_resp_baoma1.keys = []
    key_resp_baoma1.rt = []
    _key_resp_baoma1_allKeys = []
    # store start times for trialbaoma1
    trialbaoma1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialbaoma1.tStart = globalClock.getTime(format='float')
    trialbaoma1.status = STARTED
    thisExp.addData('trialbaoma1.started', trialbaoma1.tStart)
    trialbaoma1.maxDuration = None
    # keep track of which components have finished
    trialbaoma1Components = trialbaoma1.components
    for thisComponent in trialbaoma1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialbaoma1" ---
    trialbaoma1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_baoma1* updates
        
        # if text_baoma1 is starting this frame...
        if text_baoma1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_baoma1.frameNStart = frameN  # exact frame index
            text_baoma1.tStart = t  # local t and not account for scr refresh
            text_baoma1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_baoma1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_baoma1.started')
            # update status
            text_baoma1.status = STARTED
            text_baoma1.setAutoDraw(True)
        
        # if text_baoma1 is active this frame...
        if text_baoma1.status == STARTED:
            # update params
            pass
        
        # if text_baoma1 is stopping this frame...
        if text_baoma1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_baoma1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_baoma1.tStop = t  # not accounting for scr refresh
                text_baoma1.tStopRefresh = tThisFlipGlobal  # on global time
                text_baoma1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_baoma1.stopped')
                # update status
                text_baoma1.status = FINISHED
                text_baoma1.setAutoDraw(False)
        
        # *sound_baoma1* updates
        
        # if sound_baoma1 is starting this frame...
        if sound_baoma1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_baoma1.frameNStart = frameN  # exact frame index
            sound_baoma1.tStart = t  # local t and not account for scr refresh
            sound_baoma1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_baoma1.started', tThisFlipGlobal)
            # update status
            sound_baoma1.status = STARTED
            sound_baoma1.play(when=win)  # sync with win flip
        
        # if sound_baoma1 is stopping this frame...
        if sound_baoma1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_baoma1.tStartRefresh + 3.0-frameTolerance or sound_baoma1.isFinished:
                # keep track of stop time/frame for later
                sound_baoma1.tStop = t  # not accounting for scr refresh
                sound_baoma1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_baoma1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_baoma1.stopped')
                # update status
                sound_baoma1.status = FINISHED
                sound_baoma1.stop()
        
        # *text_27* updates
        
        # if text_27 is starting this frame...
        if text_27.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_27.frameNStart = frameN  # exact frame index
            text_27.tStart = t  # local t and not account for scr refresh
            text_27.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_27, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_27.started')
            # update status
            text_27.status = STARTED
            text_27.setAutoDraw(True)
        
        # if text_27 is active this frame...
        if text_27.status == STARTED:
            # update params
            pass
        
        # if text_27 is stopping this frame...
        if text_27.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_27.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_27.tStop = t  # not accounting for scr refresh
                text_27.tStopRefresh = tThisFlipGlobal  # on global time
                text_27.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_27.stopped')
                # update status
                text_27.status = FINISHED
                text_27.setAutoDraw(False)
        
        # *text_28* updates
        
        # if text_28 is starting this frame...
        if text_28.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_28.frameNStart = frameN  # exact frame index
            text_28.tStart = t  # local t and not account for scr refresh
            text_28.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_28, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_28.started')
            # update status
            text_28.status = STARTED
            text_28.setAutoDraw(True)
        
        # if text_28 is active this frame...
        if text_28.status == STARTED:
            # update params
            pass
        
        # if text_28 is stopping this frame...
        if text_28.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_28.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_28.tStop = t  # not accounting for scr refresh
                text_28.tStopRefresh = tThisFlipGlobal  # on global time
                text_28.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_28.stopped')
                # update status
                text_28.status = FINISHED
                text_28.setAutoDraw(False)
        
        # *key_resp_baoma1* updates
        waitOnFlip = False
        
        # if key_resp_baoma1 is starting this frame...
        if key_resp_baoma1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_baoma1.frameNStart = frameN  # exact frame index
            key_resp_baoma1.tStart = t  # local t and not account for scr refresh
            key_resp_baoma1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_baoma1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_baoma1.started')
            # update status
            key_resp_baoma1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_baoma1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_baoma1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_baoma1 is stopping this frame...
        if key_resp_baoma1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_baoma1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_baoma1.tStop = t  # not accounting for scr refresh
                key_resp_baoma1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_baoma1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_baoma1.stopped')
                # update status
                key_resp_baoma1.status = FINISHED
                key_resp_baoma1.status = FINISHED
        if key_resp_baoma1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_baoma1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_baoma1_allKeys.extend(theseKeys)
            if len(_key_resp_baoma1_allKeys):
                key_resp_baoma1.keys = _key_resp_baoma1_allKeys[0].name  # just the first key pressed
                key_resp_baoma1.rt = _key_resp_baoma1_allKeys[0].rt
                key_resp_baoma1.duration = _key_resp_baoma1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_baoma1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialbaoma1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialbaoma1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialbaoma1" ---
    for thisComponent in trialbaoma1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialbaoma1
    trialbaoma1.tStop = globalClock.getTime(format='float')
    trialbaoma1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialbaoma1.stopped', trialbaoma1.tStop)
    sound_baoma1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_baoma1.keys in ['', [], None]:  # No response was made
        key_resp_baoma1.keys = None
    thisExp.addData('key_resp_baoma1.keys',key_resp_baoma1.keys)
    if key_resp_baoma1.keys != None:  # we had a response
        thisExp.addData('key_resp_baoma1.rt', key_resp_baoma1.rt)
        thisExp.addData('key_resp_baoma1.duration', key_resp_baoma1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialbaoma1.maxDurationReached:
        routineTimer.addTime(-trialbaoma1.maxDuration)
    elif trialbaoma1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialjiaofu0" ---
    # create an object to store info about Routine trialjiaofu0
    trialjiaofu0 = data.Routine(
        name='trialjiaofu0',
        components=[text_jiaofu0, text_29, text_30, key_resp_jiaofu0],
    )
    trialjiaofu0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_jiaofu0
    key_resp_jiaofu0.keys = []
    key_resp_jiaofu0.rt = []
    _key_resp_jiaofu0_allKeys = []
    # store start times for trialjiaofu0
    trialjiaofu0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialjiaofu0.tStart = globalClock.getTime(format='float')
    trialjiaofu0.status = STARTED
    thisExp.addData('trialjiaofu0.started', trialjiaofu0.tStart)
    trialjiaofu0.maxDuration = None
    # keep track of which components have finished
    trialjiaofu0Components = trialjiaofu0.components
    for thisComponent in trialjiaofu0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialjiaofu0" ---
    trialjiaofu0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_jiaofu0* updates
        
        # if text_jiaofu0 is starting this frame...
        if text_jiaofu0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_jiaofu0.frameNStart = frameN  # exact frame index
            text_jiaofu0.tStart = t  # local t and not account for scr refresh
            text_jiaofu0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_jiaofu0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_jiaofu0.started')
            # update status
            text_jiaofu0.status = STARTED
            text_jiaofu0.setAutoDraw(True)
        
        # if text_jiaofu0 is active this frame...
        if text_jiaofu0.status == STARTED:
            # update params
            pass
        
        # if text_jiaofu0 is stopping this frame...
        if text_jiaofu0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_jiaofu0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_jiaofu0.tStop = t  # not accounting for scr refresh
                text_jiaofu0.tStopRefresh = tThisFlipGlobal  # on global time
                text_jiaofu0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_jiaofu0.stopped')
                # update status
                text_jiaofu0.status = FINISHED
                text_jiaofu0.setAutoDraw(False)
        
        # *text_29* updates
        
        # if text_29 is starting this frame...
        if text_29.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_29.frameNStart = frameN  # exact frame index
            text_29.tStart = t  # local t and not account for scr refresh
            text_29.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_29, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_29.started')
            # update status
            text_29.status = STARTED
            text_29.setAutoDraw(True)
        
        # if text_29 is active this frame...
        if text_29.status == STARTED:
            # update params
            pass
        
        # if text_29 is stopping this frame...
        if text_29.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_29.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_29.tStop = t  # not accounting for scr refresh
                text_29.tStopRefresh = tThisFlipGlobal  # on global time
                text_29.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_29.stopped')
                # update status
                text_29.status = FINISHED
                text_29.setAutoDraw(False)
        
        # *text_30* updates
        
        # if text_30 is starting this frame...
        if text_30.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_30.frameNStart = frameN  # exact frame index
            text_30.tStart = t  # local t and not account for scr refresh
            text_30.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_30, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_30.started')
            # update status
            text_30.status = STARTED
            text_30.setAutoDraw(True)
        
        # if text_30 is active this frame...
        if text_30.status == STARTED:
            # update params
            pass
        
        # if text_30 is stopping this frame...
        if text_30.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_30.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_30.tStop = t  # not accounting for scr refresh
                text_30.tStopRefresh = tThisFlipGlobal  # on global time
                text_30.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_30.stopped')
                # update status
                text_30.status = FINISHED
                text_30.setAutoDraw(False)
        
        # *key_resp_jiaofu0* updates
        waitOnFlip = False
        
        # if key_resp_jiaofu0 is starting this frame...
        if key_resp_jiaofu0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_jiaofu0.frameNStart = frameN  # exact frame index
            key_resp_jiaofu0.tStart = t  # local t and not account for scr refresh
            key_resp_jiaofu0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_jiaofu0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_jiaofu0.started')
            # update status
            key_resp_jiaofu0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_jiaofu0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_jiaofu0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_jiaofu0 is stopping this frame...
        if key_resp_jiaofu0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_jiaofu0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_jiaofu0.tStop = t  # not accounting for scr refresh
                key_resp_jiaofu0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_jiaofu0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_jiaofu0.stopped')
                # update status
                key_resp_jiaofu0.status = FINISHED
                key_resp_jiaofu0.status = FINISHED
        if key_resp_jiaofu0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_jiaofu0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_jiaofu0_allKeys.extend(theseKeys)
            if len(_key_resp_jiaofu0_allKeys):
                key_resp_jiaofu0.keys = _key_resp_jiaofu0_allKeys[0].name  # just the first key pressed
                key_resp_jiaofu0.rt = _key_resp_jiaofu0_allKeys[0].rt
                key_resp_jiaofu0.duration = _key_resp_jiaofu0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialjiaofu0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialjiaofu0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialjiaofu0" ---
    for thisComponent in trialjiaofu0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialjiaofu0
    trialjiaofu0.tStop = globalClock.getTime(format='float')
    trialjiaofu0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialjiaofu0.stopped', trialjiaofu0.tStop)
    # check responses
    if key_resp_jiaofu0.keys in ['', [], None]:  # No response was made
        key_resp_jiaofu0.keys = None
    thisExp.addData('key_resp_jiaofu0.keys',key_resp_jiaofu0.keys)
    if key_resp_jiaofu0.keys != None:  # we had a response
        thisExp.addData('key_resp_jiaofu0.rt', key_resp_jiaofu0.rt)
        thisExp.addData('key_resp_jiaofu0.duration', key_resp_jiaofu0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialjiaofu0.maxDurationReached:
        routineTimer.addTime(-trialjiaofu0.maxDuration)
    elif trialjiaofu0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialbaixiang1_3" ---
    # create an object to store info about Routine trialbaixiang1_3
    trialbaixiang1_3 = data.Routine(
        name='trialbaixiang1_3',
        components=[],
    )
    trialbaixiang1_3.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for trialbaixiang1_3
    trialbaixiang1_3.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialbaixiang1_3.tStart = globalClock.getTime(format='float')
    trialbaixiang1_3.status = STARTED
    thisExp.addData('trialbaixiang1_3.started', trialbaixiang1_3.tStart)
    trialbaixiang1_3.maxDuration = None
    # keep track of which components have finished
    trialbaixiang1_3Components = trialbaixiang1_3.components
    for thisComponent in trialbaixiang1_3.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialbaixiang1_3" ---
    trialbaixiang1_3.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialbaixiang1_3.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialbaixiang1_3.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialbaixiang1_3" ---
    for thisComponent in trialbaixiang1_3.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialbaixiang1_3
    trialbaixiang1_3.tStop = globalClock.getTime(format='float')
    trialbaixiang1_3.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialbaixiang1_3.stopped', trialbaixiang1_3.tStop)
    thisExp.nextEntry()
    # the Routine "trialbaixiang1_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "trialyintian0" ---
    # create an object to store info about Routine trialyintian0
    trialyintian0 = data.Routine(
        name='trialyintian0',
        components=[text_yintian0, sound_yintian0, text_33, text_34, key_resp_yintian0],
    )
    trialyintian0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_yintian0.setSound('听力/阴天-普通.wav', secs=3.0, hamming=True)
    sound_yintian0.setVolume(1.0, log=False)
    sound_yintian0.seek(0)
    # create starting attributes for key_resp_yintian0
    key_resp_yintian0.keys = []
    key_resp_yintian0.rt = []
    _key_resp_yintian0_allKeys = []
    # store start times for trialyintian0
    trialyintian0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialyintian0.tStart = globalClock.getTime(format='float')
    trialyintian0.status = STARTED
    thisExp.addData('trialyintian0.started', trialyintian0.tStart)
    trialyintian0.maxDuration = None
    # keep track of which components have finished
    trialyintian0Components = trialyintian0.components
    for thisComponent in trialyintian0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialyintian0" ---
    trialyintian0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_yintian0* updates
        
        # if text_yintian0 is starting this frame...
        if text_yintian0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_yintian0.frameNStart = frameN  # exact frame index
            text_yintian0.tStart = t  # local t and not account for scr refresh
            text_yintian0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_yintian0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_yintian0.started')
            # update status
            text_yintian0.status = STARTED
            text_yintian0.setAutoDraw(True)
        
        # if text_yintian0 is active this frame...
        if text_yintian0.status == STARTED:
            # update params
            pass
        
        # if text_yintian0 is stopping this frame...
        if text_yintian0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_yintian0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_yintian0.tStop = t  # not accounting for scr refresh
                text_yintian0.tStopRefresh = tThisFlipGlobal  # on global time
                text_yintian0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_yintian0.stopped')
                # update status
                text_yintian0.status = FINISHED
                text_yintian0.setAutoDraw(False)
        
        # *sound_yintian0* updates
        
        # if sound_yintian0 is starting this frame...
        if sound_yintian0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_yintian0.frameNStart = frameN  # exact frame index
            sound_yintian0.tStart = t  # local t and not account for scr refresh
            sound_yintian0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_yintian0.started', tThisFlipGlobal)
            # update status
            sound_yintian0.status = STARTED
            sound_yintian0.play(when=win)  # sync with win flip
        
        # if sound_yintian0 is stopping this frame...
        if sound_yintian0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_yintian0.tStartRefresh + 3.0-frameTolerance or sound_yintian0.isFinished:
                # keep track of stop time/frame for later
                sound_yintian0.tStop = t  # not accounting for scr refresh
                sound_yintian0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_yintian0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_yintian0.stopped')
                # update status
                sound_yintian0.status = FINISHED
                sound_yintian0.stop()
        
        # *text_33* updates
        
        # if text_33 is starting this frame...
        if text_33.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_33.frameNStart = frameN  # exact frame index
            text_33.tStart = t  # local t and not account for scr refresh
            text_33.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_33, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_33.started')
            # update status
            text_33.status = STARTED
            text_33.setAutoDraw(True)
        
        # if text_33 is active this frame...
        if text_33.status == STARTED:
            # update params
            pass
        
        # if text_33 is stopping this frame...
        if text_33.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_33.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_33.tStop = t  # not accounting for scr refresh
                text_33.tStopRefresh = tThisFlipGlobal  # on global time
                text_33.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_33.stopped')
                # update status
                text_33.status = FINISHED
                text_33.setAutoDraw(False)
        
        # *text_34* updates
        
        # if text_34 is starting this frame...
        if text_34.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_34.frameNStart = frameN  # exact frame index
            text_34.tStart = t  # local t and not account for scr refresh
            text_34.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_34, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_34.started')
            # update status
            text_34.status = STARTED
            text_34.setAutoDraw(True)
        
        # if text_34 is active this frame...
        if text_34.status == STARTED:
            # update params
            pass
        
        # if text_34 is stopping this frame...
        if text_34.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_34.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_34.tStop = t  # not accounting for scr refresh
                text_34.tStopRefresh = tThisFlipGlobal  # on global time
                text_34.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_34.stopped')
                # update status
                text_34.status = FINISHED
                text_34.setAutoDraw(False)
        
        # *key_resp_yintian0* updates
        waitOnFlip = False
        
        # if key_resp_yintian0 is starting this frame...
        if key_resp_yintian0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_yintian0.frameNStart = frameN  # exact frame index
            key_resp_yintian0.tStart = t  # local t and not account for scr refresh
            key_resp_yintian0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_yintian0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_yintian0.started')
            # update status
            key_resp_yintian0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_yintian0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_yintian0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_yintian0 is stopping this frame...
        if key_resp_yintian0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_yintian0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_yintian0.tStop = t  # not accounting for scr refresh
                key_resp_yintian0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_yintian0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_yintian0.stopped')
                # update status
                key_resp_yintian0.status = FINISHED
                key_resp_yintian0.status = FINISHED
        if key_resp_yintian0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_yintian0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_yintian0_allKeys.extend(theseKeys)
            if len(_key_resp_yintian0_allKeys):
                key_resp_yintian0.keys = _key_resp_yintian0_allKeys[0].name  # just the first key pressed
                key_resp_yintian0.rt = _key_resp_yintian0_allKeys[0].rt
                key_resp_yintian0.duration = _key_resp_yintian0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_yintian0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialyintian0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialyintian0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialyintian0" ---
    for thisComponent in trialyintian0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialyintian0
    trialyintian0.tStop = globalClock.getTime(format='float')
    trialyintian0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialyintian0.stopped', trialyintian0.tStop)
    sound_yintian0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_yintian0.keys in ['', [], None]:  # No response was made
        key_resp_yintian0.keys = None
    thisExp.addData('key_resp_yintian0.keys',key_resp_yintian0.keys)
    if key_resp_yintian0.keys != None:  # we had a response
        thisExp.addData('key_resp_yintian0.rt', key_resp_yintian0.rt)
        thisExp.addData('key_resp_yintian0.duration', key_resp_yintian0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialyintian0.maxDurationReached:
        routineTimer.addTime(-trialyintian0.maxDuration)
    elif trialyintian0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialchaguan0" ---
    # create an object to store info about Routine trialchaguan0
    trialchaguan0 = data.Routine(
        name='trialchaguan0',
        components=[text_chaguan0, sound_chaguan0, text_35, text_36, key_resp_chaguan0],
    )
    trialchaguan0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_chaguan0.setSound('听力/茶馆-普通.wav', secs=3.0, hamming=True)
    sound_chaguan0.setVolume(1.0, log=False)
    sound_chaguan0.seek(0)
    # create starting attributes for key_resp_chaguan0
    key_resp_chaguan0.keys = []
    key_resp_chaguan0.rt = []
    _key_resp_chaguan0_allKeys = []
    # store start times for trialchaguan0
    trialchaguan0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialchaguan0.tStart = globalClock.getTime(format='float')
    trialchaguan0.status = STARTED
    thisExp.addData('trialchaguan0.started', trialchaguan0.tStart)
    trialchaguan0.maxDuration = None
    # keep track of which components have finished
    trialchaguan0Components = trialchaguan0.components
    for thisComponent in trialchaguan0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialchaguan0" ---
    trialchaguan0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_chaguan0* updates
        
        # if text_chaguan0 is starting this frame...
        if text_chaguan0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_chaguan0.frameNStart = frameN  # exact frame index
            text_chaguan0.tStart = t  # local t and not account for scr refresh
            text_chaguan0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_chaguan0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_chaguan0.started')
            # update status
            text_chaguan0.status = STARTED
            text_chaguan0.setAutoDraw(True)
        
        # if text_chaguan0 is active this frame...
        if text_chaguan0.status == STARTED:
            # update params
            pass
        
        # if text_chaguan0 is stopping this frame...
        if text_chaguan0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_chaguan0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_chaguan0.tStop = t  # not accounting for scr refresh
                text_chaguan0.tStopRefresh = tThisFlipGlobal  # on global time
                text_chaguan0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_chaguan0.stopped')
                # update status
                text_chaguan0.status = FINISHED
                text_chaguan0.setAutoDraw(False)
        
        # *sound_chaguan0* updates
        
        # if sound_chaguan0 is starting this frame...
        if sound_chaguan0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_chaguan0.frameNStart = frameN  # exact frame index
            sound_chaguan0.tStart = t  # local t and not account for scr refresh
            sound_chaguan0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_chaguan0.started', tThisFlipGlobal)
            # update status
            sound_chaguan0.status = STARTED
            sound_chaguan0.play(when=win)  # sync with win flip
        
        # if sound_chaguan0 is stopping this frame...
        if sound_chaguan0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_chaguan0.tStartRefresh + 3.0-frameTolerance or sound_chaguan0.isFinished:
                # keep track of stop time/frame for later
                sound_chaguan0.tStop = t  # not accounting for scr refresh
                sound_chaguan0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_chaguan0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_chaguan0.stopped')
                # update status
                sound_chaguan0.status = FINISHED
                sound_chaguan0.stop()
        
        # *text_35* updates
        
        # if text_35 is starting this frame...
        if text_35.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_35.frameNStart = frameN  # exact frame index
            text_35.tStart = t  # local t and not account for scr refresh
            text_35.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_35, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_35.started')
            # update status
            text_35.status = STARTED
            text_35.setAutoDraw(True)
        
        # if text_35 is active this frame...
        if text_35.status == STARTED:
            # update params
            pass
        
        # if text_35 is stopping this frame...
        if text_35.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_35.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_35.tStop = t  # not accounting for scr refresh
                text_35.tStopRefresh = tThisFlipGlobal  # on global time
                text_35.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_35.stopped')
                # update status
                text_35.status = FINISHED
                text_35.setAutoDraw(False)
        
        # *text_36* updates
        
        # if text_36 is starting this frame...
        if text_36.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_36.frameNStart = frameN  # exact frame index
            text_36.tStart = t  # local t and not account for scr refresh
            text_36.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_36, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_36.started')
            # update status
            text_36.status = STARTED
            text_36.setAutoDraw(True)
        
        # if text_36 is active this frame...
        if text_36.status == STARTED:
            # update params
            pass
        
        # if text_36 is stopping this frame...
        if text_36.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_36.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_36.tStop = t  # not accounting for scr refresh
                text_36.tStopRefresh = tThisFlipGlobal  # on global time
                text_36.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_36.stopped')
                # update status
                text_36.status = FINISHED
                text_36.setAutoDraw(False)
        
        # *key_resp_chaguan0* updates
        waitOnFlip = False
        
        # if key_resp_chaguan0 is starting this frame...
        if key_resp_chaguan0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_chaguan0.frameNStart = frameN  # exact frame index
            key_resp_chaguan0.tStart = t  # local t and not account for scr refresh
            key_resp_chaguan0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_chaguan0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_chaguan0.started')
            # update status
            key_resp_chaguan0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_chaguan0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_chaguan0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_chaguan0 is stopping this frame...
        if key_resp_chaguan0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_chaguan0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_chaguan0.tStop = t  # not accounting for scr refresh
                key_resp_chaguan0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_chaguan0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_chaguan0.stopped')
                # update status
                key_resp_chaguan0.status = FINISHED
                key_resp_chaguan0.status = FINISHED
        if key_resp_chaguan0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_chaguan0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_chaguan0_allKeys.extend(theseKeys)
            if len(_key_resp_chaguan0_allKeys):
                key_resp_chaguan0.keys = _key_resp_chaguan0_allKeys[0].name  # just the first key pressed
                key_resp_chaguan0.rt = _key_resp_chaguan0_allKeys[0].rt
                key_resp_chaguan0.duration = _key_resp_chaguan0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_chaguan0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialchaguan0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialchaguan0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialchaguan0" ---
    for thisComponent in trialchaguan0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialchaguan0
    trialchaguan0.tStop = globalClock.getTime(format='float')
    trialchaguan0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialchaguan0.stopped', trialchaguan0.tStop)
    sound_chaguan0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_chaguan0.keys in ['', [], None]:  # No response was made
        key_resp_chaguan0.keys = None
    thisExp.addData('key_resp_chaguan0.keys',key_resp_chaguan0.keys)
    if key_resp_chaguan0.keys != None:  # we had a response
        thisExp.addData('key_resp_chaguan0.rt', key_resp_chaguan0.rt)
        thisExp.addData('key_resp_chaguan0.duration', key_resp_chaguan0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialchaguan0.maxDurationReached:
        routineTimer.addTime(-trialchaguan0.maxDuration)
    elif trialchaguan0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialbaixiang0" ---
    # create an object to store info about Routine trialbaixiang0
    trialbaixiang0 = data.Routine(
        name='trialbaixiang0',
        components=[text_baixiang0, sound_baixiang0, text_37, text_38, key_resp_baixiang0],
    )
    trialbaixiang0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_baixiang0.setSound('听力/白象-普通.wav', secs=3.0, hamming=True)
    sound_baixiang0.setVolume(1.0, log=False)
    sound_baixiang0.seek(0)
    # create starting attributes for key_resp_baixiang0
    key_resp_baixiang0.keys = []
    key_resp_baixiang0.rt = []
    _key_resp_baixiang0_allKeys = []
    # store start times for trialbaixiang0
    trialbaixiang0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialbaixiang0.tStart = globalClock.getTime(format='float')
    trialbaixiang0.status = STARTED
    thisExp.addData('trialbaixiang0.started', trialbaixiang0.tStart)
    trialbaixiang0.maxDuration = None
    # keep track of which components have finished
    trialbaixiang0Components = trialbaixiang0.components
    for thisComponent in trialbaixiang0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialbaixiang0" ---
    trialbaixiang0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_baixiang0* updates
        
        # if text_baixiang0 is starting this frame...
        if text_baixiang0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_baixiang0.frameNStart = frameN  # exact frame index
            text_baixiang0.tStart = t  # local t and not account for scr refresh
            text_baixiang0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_baixiang0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_baixiang0.started')
            # update status
            text_baixiang0.status = STARTED
            text_baixiang0.setAutoDraw(True)
        
        # if text_baixiang0 is active this frame...
        if text_baixiang0.status == STARTED:
            # update params
            pass
        
        # if text_baixiang0 is stopping this frame...
        if text_baixiang0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_baixiang0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_baixiang0.tStop = t  # not accounting for scr refresh
                text_baixiang0.tStopRefresh = tThisFlipGlobal  # on global time
                text_baixiang0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_baixiang0.stopped')
                # update status
                text_baixiang0.status = FINISHED
                text_baixiang0.setAutoDraw(False)
        
        # *sound_baixiang0* updates
        
        # if sound_baixiang0 is starting this frame...
        if sound_baixiang0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_baixiang0.frameNStart = frameN  # exact frame index
            sound_baixiang0.tStart = t  # local t and not account for scr refresh
            sound_baixiang0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_baixiang0.started', tThisFlipGlobal)
            # update status
            sound_baixiang0.status = STARTED
            sound_baixiang0.play(when=win)  # sync with win flip
        
        # if sound_baixiang0 is stopping this frame...
        if sound_baixiang0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_baixiang0.tStartRefresh + 3.0-frameTolerance or sound_baixiang0.isFinished:
                # keep track of stop time/frame for later
                sound_baixiang0.tStop = t  # not accounting for scr refresh
                sound_baixiang0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_baixiang0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_baixiang0.stopped')
                # update status
                sound_baixiang0.status = FINISHED
                sound_baixiang0.stop()
        
        # *text_37* updates
        
        # if text_37 is starting this frame...
        if text_37.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_37.frameNStart = frameN  # exact frame index
            text_37.tStart = t  # local t and not account for scr refresh
            text_37.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_37, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_37.started')
            # update status
            text_37.status = STARTED
            text_37.setAutoDraw(True)
        
        # if text_37 is active this frame...
        if text_37.status == STARTED:
            # update params
            pass
        
        # if text_37 is stopping this frame...
        if text_37.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_37.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_37.tStop = t  # not accounting for scr refresh
                text_37.tStopRefresh = tThisFlipGlobal  # on global time
                text_37.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_37.stopped')
                # update status
                text_37.status = FINISHED
                text_37.setAutoDraw(False)
        
        # *text_38* updates
        
        # if text_38 is starting this frame...
        if text_38.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_38.frameNStart = frameN  # exact frame index
            text_38.tStart = t  # local t and not account for scr refresh
            text_38.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_38, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_38.started')
            # update status
            text_38.status = STARTED
            text_38.setAutoDraw(True)
        
        # if text_38 is active this frame...
        if text_38.status == STARTED:
            # update params
            pass
        
        # if text_38 is stopping this frame...
        if text_38.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_38.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_38.tStop = t  # not accounting for scr refresh
                text_38.tStopRefresh = tThisFlipGlobal  # on global time
                text_38.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_38.stopped')
                # update status
                text_38.status = FINISHED
                text_38.setAutoDraw(False)
        
        # *key_resp_baixiang0* updates
        waitOnFlip = False
        
        # if key_resp_baixiang0 is starting this frame...
        if key_resp_baixiang0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_baixiang0.frameNStart = frameN  # exact frame index
            key_resp_baixiang0.tStart = t  # local t and not account for scr refresh
            key_resp_baixiang0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_baixiang0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_baixiang0.started')
            # update status
            key_resp_baixiang0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_baixiang0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_baixiang0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_baixiang0 is stopping this frame...
        if key_resp_baixiang0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_baixiang0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_baixiang0.tStop = t  # not accounting for scr refresh
                key_resp_baixiang0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_baixiang0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_baixiang0.stopped')
                # update status
                key_resp_baixiang0.status = FINISHED
                key_resp_baixiang0.status = FINISHED
        if key_resp_baixiang0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_baixiang0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_baixiang0_allKeys.extend(theseKeys)
            if len(_key_resp_baixiang0_allKeys):
                key_resp_baixiang0.keys = _key_resp_baixiang0_allKeys[0].name  # just the first key pressed
                key_resp_baixiang0.rt = _key_resp_baixiang0_allKeys[0].rt
                key_resp_baixiang0.duration = _key_resp_baixiang0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_baixiang0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialbaixiang0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialbaixiang0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialbaixiang0" ---
    for thisComponent in trialbaixiang0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialbaixiang0
    trialbaixiang0.tStop = globalClock.getTime(format='float')
    trialbaixiang0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialbaixiang0.stopped', trialbaixiang0.tStop)
    sound_baixiang0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_baixiang0.keys in ['', [], None]:  # No response was made
        key_resp_baixiang0.keys = None
    thisExp.addData('key_resp_baixiang0.keys',key_resp_baixiang0.keys)
    if key_resp_baixiang0.keys != None:  # we had a response
        thisExp.addData('key_resp_baixiang0.rt', key_resp_baixiang0.rt)
        thisExp.addData('key_resp_baixiang0.duration', key_resp_baixiang0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialbaixiang0.maxDurationReached:
        routineTimer.addTime(-trialbaixiang0.maxDuration)
    elif trialbaixiang0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialsinian1" ---
    # create an object to store info about Routine trialsinian1
    trialsinian1 = data.Routine(
        name='trialsinian1',
        components=[text_sinian1, sound_sinian1, text_39, text_40, key_resp_sinian1],
    )
    trialsinian1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_sinian1.setSound('听力/思念-专有.wav', secs=3.0, hamming=True)
    sound_sinian1.setVolume(1.0, log=False)
    sound_sinian1.seek(0)
    # create starting attributes for key_resp_sinian1
    key_resp_sinian1.keys = []
    key_resp_sinian1.rt = []
    _key_resp_sinian1_allKeys = []
    # store start times for trialsinian1
    trialsinian1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialsinian1.tStart = globalClock.getTime(format='float')
    trialsinian1.status = STARTED
    thisExp.addData('trialsinian1.started', trialsinian1.tStart)
    trialsinian1.maxDuration = None
    # keep track of which components have finished
    trialsinian1Components = trialsinian1.components
    for thisComponent in trialsinian1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialsinian1" ---
    trialsinian1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_sinian1* updates
        
        # if text_sinian1 is starting this frame...
        if text_sinian1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_sinian1.frameNStart = frameN  # exact frame index
            text_sinian1.tStart = t  # local t and not account for scr refresh
            text_sinian1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_sinian1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_sinian1.started')
            # update status
            text_sinian1.status = STARTED
            text_sinian1.setAutoDraw(True)
        
        # if text_sinian1 is active this frame...
        if text_sinian1.status == STARTED:
            # update params
            pass
        
        # if text_sinian1 is stopping this frame...
        if text_sinian1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_sinian1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_sinian1.tStop = t  # not accounting for scr refresh
                text_sinian1.tStopRefresh = tThisFlipGlobal  # on global time
                text_sinian1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_sinian1.stopped')
                # update status
                text_sinian1.status = FINISHED
                text_sinian1.setAutoDraw(False)
        
        # *sound_sinian1* updates
        
        # if sound_sinian1 is starting this frame...
        if sound_sinian1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_sinian1.frameNStart = frameN  # exact frame index
            sound_sinian1.tStart = t  # local t and not account for scr refresh
            sound_sinian1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_sinian1.started', tThisFlipGlobal)
            # update status
            sound_sinian1.status = STARTED
            sound_sinian1.play(when=win)  # sync with win flip
        
        # if sound_sinian1 is stopping this frame...
        if sound_sinian1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_sinian1.tStartRefresh + 3.0-frameTolerance or sound_sinian1.isFinished:
                # keep track of stop time/frame for later
                sound_sinian1.tStop = t  # not accounting for scr refresh
                sound_sinian1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_sinian1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_sinian1.stopped')
                # update status
                sound_sinian1.status = FINISHED
                sound_sinian1.stop()
        
        # *text_39* updates
        
        # if text_39 is starting this frame...
        if text_39.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_39.frameNStart = frameN  # exact frame index
            text_39.tStart = t  # local t and not account for scr refresh
            text_39.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_39, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_39.started')
            # update status
            text_39.status = STARTED
            text_39.setAutoDraw(True)
        
        # if text_39 is active this frame...
        if text_39.status == STARTED:
            # update params
            pass
        
        # if text_39 is stopping this frame...
        if text_39.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_39.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_39.tStop = t  # not accounting for scr refresh
                text_39.tStopRefresh = tThisFlipGlobal  # on global time
                text_39.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_39.stopped')
                # update status
                text_39.status = FINISHED
                text_39.setAutoDraw(False)
        
        # *text_40* updates
        
        # if text_40 is starting this frame...
        if text_40.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_40.frameNStart = frameN  # exact frame index
            text_40.tStart = t  # local t and not account for scr refresh
            text_40.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_40, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_40.started')
            # update status
            text_40.status = STARTED
            text_40.setAutoDraw(True)
        
        # if text_40 is active this frame...
        if text_40.status == STARTED:
            # update params
            pass
        
        # if text_40 is stopping this frame...
        if text_40.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_40.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_40.tStop = t  # not accounting for scr refresh
                text_40.tStopRefresh = tThisFlipGlobal  # on global time
                text_40.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_40.stopped')
                # update status
                text_40.status = FINISHED
                text_40.setAutoDraw(False)
        
        # *key_resp_sinian1* updates
        waitOnFlip = False
        
        # if key_resp_sinian1 is starting this frame...
        if key_resp_sinian1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_sinian1.frameNStart = frameN  # exact frame index
            key_resp_sinian1.tStart = t  # local t and not account for scr refresh
            key_resp_sinian1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_sinian1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_sinian1.started')
            # update status
            key_resp_sinian1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_sinian1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_sinian1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_sinian1 is stopping this frame...
        if key_resp_sinian1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_sinian1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_sinian1.tStop = t  # not accounting for scr refresh
                key_resp_sinian1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_sinian1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_sinian1.stopped')
                # update status
                key_resp_sinian1.status = FINISHED
                key_resp_sinian1.status = FINISHED
        if key_resp_sinian1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_sinian1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_sinian1_allKeys.extend(theseKeys)
            if len(_key_resp_sinian1_allKeys):
                key_resp_sinian1.keys = _key_resp_sinian1_allKeys[0].name  # just the first key pressed
                key_resp_sinian1.rt = _key_resp_sinian1_allKeys[0].rt
                key_resp_sinian1.duration = _key_resp_sinian1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_sinian1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialsinian1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialsinian1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialsinian1" ---
    for thisComponent in trialsinian1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialsinian1
    trialsinian1.tStop = globalClock.getTime(format='float')
    trialsinian1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialsinian1.stopped', trialsinian1.tStop)
    sound_sinian1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_sinian1.keys in ['', [], None]:  # No response was made
        key_resp_sinian1.keys = None
    thisExp.addData('key_resp_sinian1.keys',key_resp_sinian1.keys)
    if key_resp_sinian1.keys != None:  # we had a response
        thisExp.addData('key_resp_sinian1.rt', key_resp_sinian1.rt)
        thisExp.addData('key_resp_sinian1.duration', key_resp_sinian1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialsinian1.maxDurationReached:
        routineTimer.addTime(-trialsinian1.maxDuration)
    elif trialsinian1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialsinian0" ---
    # create an object to store info about Routine trialsinian0
    trialsinian0 = data.Routine(
        name='trialsinian0',
        components=[text_sinian0, sound_sinian, text_41, text_42, key_resp_sinian0],
    )
    trialsinian0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_sinian.setSound('听力/思念-普通.wav', secs=3.0, hamming=True)
    sound_sinian.setVolume(1.0, log=False)
    sound_sinian.seek(0)
    # create starting attributes for key_resp_sinian0
    key_resp_sinian0.keys = []
    key_resp_sinian0.rt = []
    _key_resp_sinian0_allKeys = []
    # store start times for trialsinian0
    trialsinian0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialsinian0.tStart = globalClock.getTime(format='float')
    trialsinian0.status = STARTED
    thisExp.addData('trialsinian0.started', trialsinian0.tStart)
    trialsinian0.maxDuration = None
    # keep track of which components have finished
    trialsinian0Components = trialsinian0.components
    for thisComponent in trialsinian0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialsinian0" ---
    trialsinian0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_sinian0* updates
        
        # if text_sinian0 is starting this frame...
        if text_sinian0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_sinian0.frameNStart = frameN  # exact frame index
            text_sinian0.tStart = t  # local t and not account for scr refresh
            text_sinian0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_sinian0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_sinian0.started')
            # update status
            text_sinian0.status = STARTED
            text_sinian0.setAutoDraw(True)
        
        # if text_sinian0 is active this frame...
        if text_sinian0.status == STARTED:
            # update params
            pass
        
        # if text_sinian0 is stopping this frame...
        if text_sinian0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_sinian0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_sinian0.tStop = t  # not accounting for scr refresh
                text_sinian0.tStopRefresh = tThisFlipGlobal  # on global time
                text_sinian0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_sinian0.stopped')
                # update status
                text_sinian0.status = FINISHED
                text_sinian0.setAutoDraw(False)
        
        # *sound_sinian* updates
        
        # if sound_sinian is starting this frame...
        if sound_sinian.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_sinian.frameNStart = frameN  # exact frame index
            sound_sinian.tStart = t  # local t and not account for scr refresh
            sound_sinian.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_sinian.started', tThisFlipGlobal)
            # update status
            sound_sinian.status = STARTED
            sound_sinian.play(when=win)  # sync with win flip
        
        # if sound_sinian is stopping this frame...
        if sound_sinian.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_sinian.tStartRefresh + 3.0-frameTolerance or sound_sinian.isFinished:
                # keep track of stop time/frame for later
                sound_sinian.tStop = t  # not accounting for scr refresh
                sound_sinian.tStopRefresh = tThisFlipGlobal  # on global time
                sound_sinian.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_sinian.stopped')
                # update status
                sound_sinian.status = FINISHED
                sound_sinian.stop()
        
        # *text_41* updates
        
        # if text_41 is starting this frame...
        if text_41.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_41.frameNStart = frameN  # exact frame index
            text_41.tStart = t  # local t and not account for scr refresh
            text_41.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_41, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_41.started')
            # update status
            text_41.status = STARTED
            text_41.setAutoDraw(True)
        
        # if text_41 is active this frame...
        if text_41.status == STARTED:
            # update params
            pass
        
        # if text_41 is stopping this frame...
        if text_41.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_41.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_41.tStop = t  # not accounting for scr refresh
                text_41.tStopRefresh = tThisFlipGlobal  # on global time
                text_41.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_41.stopped')
                # update status
                text_41.status = FINISHED
                text_41.setAutoDraw(False)
        
        # *text_42* updates
        
        # if text_42 is starting this frame...
        if text_42.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_42.frameNStart = frameN  # exact frame index
            text_42.tStart = t  # local t and not account for scr refresh
            text_42.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_42, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_42.started')
            # update status
            text_42.status = STARTED
            text_42.setAutoDraw(True)
        
        # if text_42 is active this frame...
        if text_42.status == STARTED:
            # update params
            pass
        
        # if text_42 is stopping this frame...
        if text_42.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_42.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_42.tStop = t  # not accounting for scr refresh
                text_42.tStopRefresh = tThisFlipGlobal  # on global time
                text_42.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_42.stopped')
                # update status
                text_42.status = FINISHED
                text_42.setAutoDraw(False)
        
        # *key_resp_sinian0* updates
        waitOnFlip = False
        
        # if key_resp_sinian0 is starting this frame...
        if key_resp_sinian0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_sinian0.frameNStart = frameN  # exact frame index
            key_resp_sinian0.tStart = t  # local t and not account for scr refresh
            key_resp_sinian0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_sinian0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_sinian0.started')
            # update status
            key_resp_sinian0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_sinian0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_sinian0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_sinian0 is stopping this frame...
        if key_resp_sinian0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_sinian0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_sinian0.tStop = t  # not accounting for scr refresh
                key_resp_sinian0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_sinian0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_sinian0.stopped')
                # update status
                key_resp_sinian0.status = FINISHED
                key_resp_sinian0.status = FINISHED
        if key_resp_sinian0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_sinian0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_sinian0_allKeys.extend(theseKeys)
            if len(_key_resp_sinian0_allKeys):
                key_resp_sinian0.keys = _key_resp_sinian0_allKeys[0].name  # just the first key pressed
                key_resp_sinian0.rt = _key_resp_sinian0_allKeys[0].rt
                key_resp_sinian0.duration = _key_resp_sinian0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_sinian]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialsinian0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialsinian0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialsinian0" ---
    for thisComponent in trialsinian0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialsinian0
    trialsinian0.tStop = globalClock.getTime(format='float')
    trialsinian0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialsinian0.stopped', trialsinian0.tStop)
    sound_sinian.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_sinian0.keys in ['', [], None]:  # No response was made
        key_resp_sinian0.keys = None
    thisExp.addData('key_resp_sinian0.keys',key_resp_sinian0.keys)
    if key_resp_sinian0.keys != None:  # we had a response
        thisExp.addData('key_resp_sinian0.rt', key_resp_sinian0.rt)
        thisExp.addData('key_resp_sinian0.duration', key_resp_sinian0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialsinian0.maxDurationReached:
        routineTimer.addTime(-trialsinian0.maxDuration)
    elif trialsinian0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialyongqi0" ---
    # create an object to store info about Routine trialyongqi0
    trialyongqi0 = data.Routine(
        name='trialyongqi0',
        components=[text_yongqi0, sound_yongqi0, text_43, text_44, key_resp_yongqi0],
    )
    trialyongqi0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_yongqi0.setSound('听力/勇气-普通.wav', secs=3.0, hamming=True)
    sound_yongqi0.setVolume(1.0, log=False)
    sound_yongqi0.seek(0)
    # create starting attributes for key_resp_yongqi0
    key_resp_yongqi0.keys = []
    key_resp_yongqi0.rt = []
    _key_resp_yongqi0_allKeys = []
    # store start times for trialyongqi0
    trialyongqi0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialyongqi0.tStart = globalClock.getTime(format='float')
    trialyongqi0.status = STARTED
    thisExp.addData('trialyongqi0.started', trialyongqi0.tStart)
    trialyongqi0.maxDuration = None
    # keep track of which components have finished
    trialyongqi0Components = trialyongqi0.components
    for thisComponent in trialyongqi0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialyongqi0" ---
    trialyongqi0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_yongqi0* updates
        
        # if text_yongqi0 is starting this frame...
        if text_yongqi0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_yongqi0.frameNStart = frameN  # exact frame index
            text_yongqi0.tStart = t  # local t and not account for scr refresh
            text_yongqi0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_yongqi0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_yongqi0.started')
            # update status
            text_yongqi0.status = STARTED
            text_yongqi0.setAutoDraw(True)
        
        # if text_yongqi0 is active this frame...
        if text_yongqi0.status == STARTED:
            # update params
            pass
        
        # if text_yongqi0 is stopping this frame...
        if text_yongqi0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_yongqi0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_yongqi0.tStop = t  # not accounting for scr refresh
                text_yongqi0.tStopRefresh = tThisFlipGlobal  # on global time
                text_yongqi0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_yongqi0.stopped')
                # update status
                text_yongqi0.status = FINISHED
                text_yongqi0.setAutoDraw(False)
        
        # *sound_yongqi0* updates
        
        # if sound_yongqi0 is starting this frame...
        if sound_yongqi0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_yongqi0.frameNStart = frameN  # exact frame index
            sound_yongqi0.tStart = t  # local t and not account for scr refresh
            sound_yongqi0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_yongqi0.started', tThisFlipGlobal)
            # update status
            sound_yongqi0.status = STARTED
            sound_yongqi0.play(when=win)  # sync with win flip
        
        # if sound_yongqi0 is stopping this frame...
        if sound_yongqi0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_yongqi0.tStartRefresh + 3.0-frameTolerance or sound_yongqi0.isFinished:
                # keep track of stop time/frame for later
                sound_yongqi0.tStop = t  # not accounting for scr refresh
                sound_yongqi0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_yongqi0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_yongqi0.stopped')
                # update status
                sound_yongqi0.status = FINISHED
                sound_yongqi0.stop()
        
        # *text_43* updates
        
        # if text_43 is starting this frame...
        if text_43.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_43.frameNStart = frameN  # exact frame index
            text_43.tStart = t  # local t and not account for scr refresh
            text_43.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_43, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_43.started')
            # update status
            text_43.status = STARTED
            text_43.setAutoDraw(True)
        
        # if text_43 is active this frame...
        if text_43.status == STARTED:
            # update params
            pass
        
        # if text_43 is stopping this frame...
        if text_43.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_43.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_43.tStop = t  # not accounting for scr refresh
                text_43.tStopRefresh = tThisFlipGlobal  # on global time
                text_43.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_43.stopped')
                # update status
                text_43.status = FINISHED
                text_43.setAutoDraw(False)
        
        # *text_44* updates
        
        # if text_44 is starting this frame...
        if text_44.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_44.frameNStart = frameN  # exact frame index
            text_44.tStart = t  # local t and not account for scr refresh
            text_44.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_44, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_44.started')
            # update status
            text_44.status = STARTED
            text_44.setAutoDraw(True)
        
        # if text_44 is active this frame...
        if text_44.status == STARTED:
            # update params
            pass
        
        # if text_44 is stopping this frame...
        if text_44.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_44.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_44.tStop = t  # not accounting for scr refresh
                text_44.tStopRefresh = tThisFlipGlobal  # on global time
                text_44.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_44.stopped')
                # update status
                text_44.status = FINISHED
                text_44.setAutoDraw(False)
        
        # *key_resp_yongqi0* updates
        waitOnFlip = False
        
        # if key_resp_yongqi0 is starting this frame...
        if key_resp_yongqi0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_yongqi0.frameNStart = frameN  # exact frame index
            key_resp_yongqi0.tStart = t  # local t and not account for scr refresh
            key_resp_yongqi0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_yongqi0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_yongqi0.started')
            # update status
            key_resp_yongqi0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_yongqi0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_yongqi0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_yongqi0 is stopping this frame...
        if key_resp_yongqi0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_yongqi0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_yongqi0.tStop = t  # not accounting for scr refresh
                key_resp_yongqi0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_yongqi0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_yongqi0.stopped')
                # update status
                key_resp_yongqi0.status = FINISHED
                key_resp_yongqi0.status = FINISHED
        if key_resp_yongqi0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_yongqi0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_yongqi0_allKeys.extend(theseKeys)
            if len(_key_resp_yongqi0_allKeys):
                key_resp_yongqi0.keys = _key_resp_yongqi0_allKeys[0].name  # just the first key pressed
                key_resp_yongqi0.rt = _key_resp_yongqi0_allKeys[0].rt
                key_resp_yongqi0.duration = _key_resp_yongqi0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_yongqi0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialyongqi0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialyongqi0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialyongqi0" ---
    for thisComponent in trialyongqi0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialyongqi0
    trialyongqi0.tStop = globalClock.getTime(format='float')
    trialyongqi0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialyongqi0.stopped', trialyongqi0.tStop)
    sound_yongqi0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_yongqi0.keys in ['', [], None]:  # No response was made
        key_resp_yongqi0.keys = None
    thisExp.addData('key_resp_yongqi0.keys',key_resp_yongqi0.keys)
    if key_resp_yongqi0.keys != None:  # we had a response
        thisExp.addData('key_resp_yongqi0.rt', key_resp_yongqi0.rt)
        thisExp.addData('key_resp_yongqi0.duration', key_resp_yongqi0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialyongqi0.maxDurationReached:
        routineTimer.addTime(-trialyongqi0.maxDuration)
    elif trialyongqi0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialfuqin0" ---
    # create an object to store info about Routine trialfuqin0
    trialfuqin0 = data.Routine(
        name='trialfuqin0',
        components=[text_fuqin0, sound_fuqin0, text_45, text_46, key_resp_fuqin0],
    )
    trialfuqin0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_fuqin0.setSound('听力/父亲-普通.wav', secs=3.0, hamming=True)
    sound_fuqin0.setVolume(1.0, log=False)
    sound_fuqin0.seek(0)
    # create starting attributes for key_resp_fuqin0
    key_resp_fuqin0.keys = []
    key_resp_fuqin0.rt = []
    _key_resp_fuqin0_allKeys = []
    # store start times for trialfuqin0
    trialfuqin0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialfuqin0.tStart = globalClock.getTime(format='float')
    trialfuqin0.status = STARTED
    thisExp.addData('trialfuqin0.started', trialfuqin0.tStart)
    trialfuqin0.maxDuration = None
    # keep track of which components have finished
    trialfuqin0Components = trialfuqin0.components
    for thisComponent in trialfuqin0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialfuqin0" ---
    trialfuqin0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_fuqin0* updates
        
        # if text_fuqin0 is starting this frame...
        if text_fuqin0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_fuqin0.frameNStart = frameN  # exact frame index
            text_fuqin0.tStart = t  # local t and not account for scr refresh
            text_fuqin0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_fuqin0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_fuqin0.started')
            # update status
            text_fuqin0.status = STARTED
            text_fuqin0.setAutoDraw(True)
        
        # if text_fuqin0 is active this frame...
        if text_fuqin0.status == STARTED:
            # update params
            pass
        
        # if text_fuqin0 is stopping this frame...
        if text_fuqin0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_fuqin0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_fuqin0.tStop = t  # not accounting for scr refresh
                text_fuqin0.tStopRefresh = tThisFlipGlobal  # on global time
                text_fuqin0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_fuqin0.stopped')
                # update status
                text_fuqin0.status = FINISHED
                text_fuqin0.setAutoDraw(False)
        
        # *sound_fuqin0* updates
        
        # if sound_fuqin0 is starting this frame...
        if sound_fuqin0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_fuqin0.frameNStart = frameN  # exact frame index
            sound_fuqin0.tStart = t  # local t and not account for scr refresh
            sound_fuqin0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_fuqin0.started', tThisFlipGlobal)
            # update status
            sound_fuqin0.status = STARTED
            sound_fuqin0.play(when=win)  # sync with win flip
        
        # if sound_fuqin0 is stopping this frame...
        if sound_fuqin0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_fuqin0.tStartRefresh + 3.0-frameTolerance or sound_fuqin0.isFinished:
                # keep track of stop time/frame for later
                sound_fuqin0.tStop = t  # not accounting for scr refresh
                sound_fuqin0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_fuqin0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_fuqin0.stopped')
                # update status
                sound_fuqin0.status = FINISHED
                sound_fuqin0.stop()
        
        # *text_45* updates
        
        # if text_45 is starting this frame...
        if text_45.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_45.frameNStart = frameN  # exact frame index
            text_45.tStart = t  # local t and not account for scr refresh
            text_45.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_45, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_45.started')
            # update status
            text_45.status = STARTED
            text_45.setAutoDraw(True)
        
        # if text_45 is active this frame...
        if text_45.status == STARTED:
            # update params
            pass
        
        # if text_45 is stopping this frame...
        if text_45.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_45.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_45.tStop = t  # not accounting for scr refresh
                text_45.tStopRefresh = tThisFlipGlobal  # on global time
                text_45.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_45.stopped')
                # update status
                text_45.status = FINISHED
                text_45.setAutoDraw(False)
        
        # *text_46* updates
        
        # if text_46 is starting this frame...
        if text_46.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_46.frameNStart = frameN  # exact frame index
            text_46.tStart = t  # local t and not account for scr refresh
            text_46.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_46, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_46.started')
            # update status
            text_46.status = STARTED
            text_46.setAutoDraw(True)
        
        # if text_46 is active this frame...
        if text_46.status == STARTED:
            # update params
            pass
        
        # if text_46 is stopping this frame...
        if text_46.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_46.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_46.tStop = t  # not accounting for scr refresh
                text_46.tStopRefresh = tThisFlipGlobal  # on global time
                text_46.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_46.stopped')
                # update status
                text_46.status = FINISHED
                text_46.setAutoDraw(False)
        
        # *key_resp_fuqin0* updates
        waitOnFlip = False
        
        # if key_resp_fuqin0 is starting this frame...
        if key_resp_fuqin0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_fuqin0.frameNStart = frameN  # exact frame index
            key_resp_fuqin0.tStart = t  # local t and not account for scr refresh
            key_resp_fuqin0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_fuqin0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_fuqin0.started')
            # update status
            key_resp_fuqin0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_fuqin0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_fuqin0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_fuqin0 is stopping this frame...
        if key_resp_fuqin0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_fuqin0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_fuqin0.tStop = t  # not accounting for scr refresh
                key_resp_fuqin0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_fuqin0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_fuqin0.stopped')
                # update status
                key_resp_fuqin0.status = FINISHED
                key_resp_fuqin0.status = FINISHED
        if key_resp_fuqin0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_fuqin0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_fuqin0_allKeys.extend(theseKeys)
            if len(_key_resp_fuqin0_allKeys):
                key_resp_fuqin0.keys = _key_resp_fuqin0_allKeys[0].name  # just the first key pressed
                key_resp_fuqin0.rt = _key_resp_fuqin0_allKeys[0].rt
                key_resp_fuqin0.duration = _key_resp_fuqin0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_fuqin0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialfuqin0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialfuqin0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialfuqin0" ---
    for thisComponent in trialfuqin0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialfuqin0
    trialfuqin0.tStop = globalClock.getTime(format='float')
    trialfuqin0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialfuqin0.stopped', trialfuqin0.tStop)
    sound_fuqin0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_fuqin0.keys in ['', [], None]:  # No response was made
        key_resp_fuqin0.keys = None
    thisExp.addData('key_resp_fuqin0.keys',key_resp_fuqin0.keys)
    if key_resp_fuqin0.keys != None:  # we had a response
        thisExp.addData('key_resp_fuqin0.rt', key_resp_fuqin0.rt)
        thisExp.addData('key_resp_fuqin0.duration', key_resp_fuqin0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialfuqin0.maxDurationReached:
        routineTimer.addTime(-trialfuqin0.maxDuration)
    elif trialfuqin0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialguangming1" ---
    # create an object to store info about Routine trialguangming1
    trialguangming1 = data.Routine(
        name='trialguangming1',
        components=[text_guangming1, sound_guangming1, text_47, text_48, key_resp_光明1],
    )
    trialguangming1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_guangming1.setSound('听力/光明-专有.wav', secs=3.0, hamming=True)
    sound_guangming1.setVolume(1.0, log=False)
    sound_guangming1.seek(0)
    # create starting attributes for key_resp_光明1
    key_resp_光明1.keys = []
    key_resp_光明1.rt = []
    _key_resp_光明1_allKeys = []
    # store start times for trialguangming1
    trialguangming1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialguangming1.tStart = globalClock.getTime(format='float')
    trialguangming1.status = STARTED
    thisExp.addData('trialguangming1.started', trialguangming1.tStart)
    trialguangming1.maxDuration = None
    # keep track of which components have finished
    trialguangming1Components = trialguangming1.components
    for thisComponent in trialguangming1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialguangming1" ---
    trialguangming1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_guangming1* updates
        
        # if text_guangming1 is starting this frame...
        if text_guangming1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_guangming1.frameNStart = frameN  # exact frame index
            text_guangming1.tStart = t  # local t and not account for scr refresh
            text_guangming1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_guangming1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_guangming1.started')
            # update status
            text_guangming1.status = STARTED
            text_guangming1.setAutoDraw(True)
        
        # if text_guangming1 is active this frame...
        if text_guangming1.status == STARTED:
            # update params
            pass
        
        # if text_guangming1 is stopping this frame...
        if text_guangming1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_guangming1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_guangming1.tStop = t  # not accounting for scr refresh
                text_guangming1.tStopRefresh = tThisFlipGlobal  # on global time
                text_guangming1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_guangming1.stopped')
                # update status
                text_guangming1.status = FINISHED
                text_guangming1.setAutoDraw(False)
        
        # *sound_guangming1* updates
        
        # if sound_guangming1 is starting this frame...
        if sound_guangming1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_guangming1.frameNStart = frameN  # exact frame index
            sound_guangming1.tStart = t  # local t and not account for scr refresh
            sound_guangming1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_guangming1.started', tThisFlipGlobal)
            # update status
            sound_guangming1.status = STARTED
            sound_guangming1.play(when=win)  # sync with win flip
        
        # if sound_guangming1 is stopping this frame...
        if sound_guangming1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_guangming1.tStartRefresh + 3.0-frameTolerance or sound_guangming1.isFinished:
                # keep track of stop time/frame for later
                sound_guangming1.tStop = t  # not accounting for scr refresh
                sound_guangming1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_guangming1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_guangming1.stopped')
                # update status
                sound_guangming1.status = FINISHED
                sound_guangming1.stop()
        
        # *text_47* updates
        
        # if text_47 is starting this frame...
        if text_47.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_47.frameNStart = frameN  # exact frame index
            text_47.tStart = t  # local t and not account for scr refresh
            text_47.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_47, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_47.started')
            # update status
            text_47.status = STARTED
            text_47.setAutoDraw(True)
        
        # if text_47 is active this frame...
        if text_47.status == STARTED:
            # update params
            pass
        
        # if text_47 is stopping this frame...
        if text_47.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_47.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_47.tStop = t  # not accounting for scr refresh
                text_47.tStopRefresh = tThisFlipGlobal  # on global time
                text_47.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_47.stopped')
                # update status
                text_47.status = FINISHED
                text_47.setAutoDraw(False)
        
        # *text_48* updates
        
        # if text_48 is starting this frame...
        if text_48.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_48.frameNStart = frameN  # exact frame index
            text_48.tStart = t  # local t and not account for scr refresh
            text_48.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_48, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_48.started')
            # update status
            text_48.status = STARTED
            text_48.setAutoDraw(True)
        
        # if text_48 is active this frame...
        if text_48.status == STARTED:
            # update params
            pass
        
        # if text_48 is stopping this frame...
        if text_48.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_48.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_48.tStop = t  # not accounting for scr refresh
                text_48.tStopRefresh = tThisFlipGlobal  # on global time
                text_48.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_48.stopped')
                # update status
                text_48.status = FINISHED
                text_48.setAutoDraw(False)
        
        # *key_resp_光明1* updates
        waitOnFlip = False
        
        # if key_resp_光明1 is starting this frame...
        if key_resp_光明1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_光明1.frameNStart = frameN  # exact frame index
            key_resp_光明1.tStart = t  # local t and not account for scr refresh
            key_resp_光明1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_光明1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_光明1.started')
            # update status
            key_resp_光明1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_光明1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_光明1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_光明1 is stopping this frame...
        if key_resp_光明1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_光明1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_光明1.tStop = t  # not accounting for scr refresh
                key_resp_光明1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_光明1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_光明1.stopped')
                # update status
                key_resp_光明1.status = FINISHED
                key_resp_光明1.status = FINISHED
        if key_resp_光明1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_光明1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_光明1_allKeys.extend(theseKeys)
            if len(_key_resp_光明1_allKeys):
                key_resp_光明1.keys = _key_resp_光明1_allKeys[0].name  # just the first key pressed
                key_resp_光明1.rt = _key_resp_光明1_allKeys[0].rt
                key_resp_光明1.duration = _key_resp_光明1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_guangming1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialguangming1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialguangming1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialguangming1" ---
    for thisComponent in trialguangming1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialguangming1
    trialguangming1.tStop = globalClock.getTime(format='float')
    trialguangming1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialguangming1.stopped', trialguangming1.tStop)
    sound_guangming1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_光明1.keys in ['', [], None]:  # No response was made
        key_resp_光明1.keys = None
    thisExp.addData('key_resp_光明1.keys',key_resp_光明1.keys)
    if key_resp_光明1.keys != None:  # we had a response
        thisExp.addData('key_resp_光明1.rt', key_resp_光明1.rt)
        thisExp.addData('key_resp_光明1.duration', key_resp_光明1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialguangming1.maxDurationReached:
        routineTimer.addTime(-trialguangming1.maxDuration)
    elif trialguangming1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialbaimao0" ---
    # create an object to store info about Routine trialbaimao0
    trialbaimao0 = data.Routine(
        name='trialbaimao0',
        components=[text_baimao0, sound_baimao0, text_49, text_50, key_resp_baimao0],
    )
    trialbaimao0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_baimao0.setSound('听力/白猫-普通.wav', secs=3.0, hamming=True)
    sound_baimao0.setVolume(1.0, log=False)
    sound_baimao0.seek(0)
    # create starting attributes for key_resp_baimao0
    key_resp_baimao0.keys = []
    key_resp_baimao0.rt = []
    _key_resp_baimao0_allKeys = []
    # store start times for trialbaimao0
    trialbaimao0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialbaimao0.tStart = globalClock.getTime(format='float')
    trialbaimao0.status = STARTED
    thisExp.addData('trialbaimao0.started', trialbaimao0.tStart)
    trialbaimao0.maxDuration = None
    # keep track of which components have finished
    trialbaimao0Components = trialbaimao0.components
    for thisComponent in trialbaimao0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialbaimao0" ---
    trialbaimao0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_baimao0* updates
        
        # if text_baimao0 is starting this frame...
        if text_baimao0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_baimao0.frameNStart = frameN  # exact frame index
            text_baimao0.tStart = t  # local t and not account for scr refresh
            text_baimao0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_baimao0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_baimao0.started')
            # update status
            text_baimao0.status = STARTED
            text_baimao0.setAutoDraw(True)
        
        # if text_baimao0 is active this frame...
        if text_baimao0.status == STARTED:
            # update params
            pass
        
        # if text_baimao0 is stopping this frame...
        if text_baimao0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_baimao0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_baimao0.tStop = t  # not accounting for scr refresh
                text_baimao0.tStopRefresh = tThisFlipGlobal  # on global time
                text_baimao0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_baimao0.stopped')
                # update status
                text_baimao0.status = FINISHED
                text_baimao0.setAutoDraw(False)
        
        # *sound_baimao0* updates
        
        # if sound_baimao0 is starting this frame...
        if sound_baimao0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_baimao0.frameNStart = frameN  # exact frame index
            sound_baimao0.tStart = t  # local t and not account for scr refresh
            sound_baimao0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_baimao0.started', tThisFlipGlobal)
            # update status
            sound_baimao0.status = STARTED
            sound_baimao0.play(when=win)  # sync with win flip
        
        # if sound_baimao0 is stopping this frame...
        if sound_baimao0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_baimao0.tStartRefresh + 3.0-frameTolerance or sound_baimao0.isFinished:
                # keep track of stop time/frame for later
                sound_baimao0.tStop = t  # not accounting for scr refresh
                sound_baimao0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_baimao0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_baimao0.stopped')
                # update status
                sound_baimao0.status = FINISHED
                sound_baimao0.stop()
        
        # *text_49* updates
        
        # if text_49 is starting this frame...
        if text_49.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_49.frameNStart = frameN  # exact frame index
            text_49.tStart = t  # local t and not account for scr refresh
            text_49.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_49, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_49.started')
            # update status
            text_49.status = STARTED
            text_49.setAutoDraw(True)
        
        # if text_49 is active this frame...
        if text_49.status == STARTED:
            # update params
            pass
        
        # if text_49 is stopping this frame...
        if text_49.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_49.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_49.tStop = t  # not accounting for scr refresh
                text_49.tStopRefresh = tThisFlipGlobal  # on global time
                text_49.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_49.stopped')
                # update status
                text_49.status = FINISHED
                text_49.setAutoDraw(False)
        
        # *text_50* updates
        
        # if text_50 is starting this frame...
        if text_50.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_50.frameNStart = frameN  # exact frame index
            text_50.tStart = t  # local t and not account for scr refresh
            text_50.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_50, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_50.started')
            # update status
            text_50.status = STARTED
            text_50.setAutoDraw(True)
        
        # if text_50 is active this frame...
        if text_50.status == STARTED:
            # update params
            pass
        
        # if text_50 is stopping this frame...
        if text_50.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_50.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_50.tStop = t  # not accounting for scr refresh
                text_50.tStopRefresh = tThisFlipGlobal  # on global time
                text_50.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_50.stopped')
                # update status
                text_50.status = FINISHED
                text_50.setAutoDraw(False)
        
        # *key_resp_baimao0* updates
        waitOnFlip = False
        
        # if key_resp_baimao0 is starting this frame...
        if key_resp_baimao0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_baimao0.frameNStart = frameN  # exact frame index
            key_resp_baimao0.tStart = t  # local t and not account for scr refresh
            key_resp_baimao0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_baimao0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_baimao0.started')
            # update status
            key_resp_baimao0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_baimao0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_baimao0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_baimao0 is stopping this frame...
        if key_resp_baimao0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_baimao0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_baimao0.tStop = t  # not accounting for scr refresh
                key_resp_baimao0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_baimao0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_baimao0.stopped')
                # update status
                key_resp_baimao0.status = FINISHED
                key_resp_baimao0.status = FINISHED
        if key_resp_baimao0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_baimao0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_baimao0_allKeys.extend(theseKeys)
            if len(_key_resp_baimao0_allKeys):
                key_resp_baimao0.keys = _key_resp_baimao0_allKeys[0].name  # just the first key pressed
                key_resp_baimao0.rt = _key_resp_baimao0_allKeys[0].rt
                key_resp_baimao0.duration = _key_resp_baimao0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_baimao0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialbaimao0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialbaimao0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialbaimao0" ---
    for thisComponent in trialbaimao0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialbaimao0
    trialbaimao0.tStop = globalClock.getTime(format='float')
    trialbaimao0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialbaimao0.stopped', trialbaimao0.tStop)
    sound_baimao0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_baimao0.keys in ['', [], None]:  # No response was made
        key_resp_baimao0.keys = None
    thisExp.addData('key_resp_baimao0.keys',key_resp_baimao0.keys)
    if key_resp_baimao0.keys != None:  # we had a response
        thisExp.addData('key_resp_baimao0.rt', key_resp_baimao0.rt)
        thisExp.addData('key_resp_baimao0.duration', key_resp_baimao0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialbaimao0.maxDurationReached:
        routineTimer.addTime(-trialbaimao0.maxDuration)
    elif trialbaimao0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialxiongdi1" ---
    # create an object to store info about Routine trialxiongdi1
    trialxiongdi1 = data.Routine(
        name='trialxiongdi1',
        components=[text_xiongdi1, sound_xiongdi1, text_51, text_52, key_resp_xiongdi1],
    )
    trialxiongdi1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_xiongdi1.setSound('听力/兄弟-专有.wav', secs=3.0, hamming=True)
    sound_xiongdi1.setVolume(1.0, log=False)
    sound_xiongdi1.seek(0)
    # create starting attributes for key_resp_xiongdi1
    key_resp_xiongdi1.keys = []
    key_resp_xiongdi1.rt = []
    _key_resp_xiongdi1_allKeys = []
    # store start times for trialxiongdi1
    trialxiongdi1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialxiongdi1.tStart = globalClock.getTime(format='float')
    trialxiongdi1.status = STARTED
    thisExp.addData('trialxiongdi1.started', trialxiongdi1.tStart)
    trialxiongdi1.maxDuration = None
    # keep track of which components have finished
    trialxiongdi1Components = trialxiongdi1.components
    for thisComponent in trialxiongdi1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialxiongdi1" ---
    trialxiongdi1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_xiongdi1* updates
        
        # if text_xiongdi1 is starting this frame...
        if text_xiongdi1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_xiongdi1.frameNStart = frameN  # exact frame index
            text_xiongdi1.tStart = t  # local t and not account for scr refresh
            text_xiongdi1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_xiongdi1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_xiongdi1.started')
            # update status
            text_xiongdi1.status = STARTED
            text_xiongdi1.setAutoDraw(True)
        
        # if text_xiongdi1 is active this frame...
        if text_xiongdi1.status == STARTED:
            # update params
            pass
        
        # if text_xiongdi1 is stopping this frame...
        if text_xiongdi1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_xiongdi1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_xiongdi1.tStop = t  # not accounting for scr refresh
                text_xiongdi1.tStopRefresh = tThisFlipGlobal  # on global time
                text_xiongdi1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_xiongdi1.stopped')
                # update status
                text_xiongdi1.status = FINISHED
                text_xiongdi1.setAutoDraw(False)
        
        # *sound_xiongdi1* updates
        
        # if sound_xiongdi1 is starting this frame...
        if sound_xiongdi1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_xiongdi1.frameNStart = frameN  # exact frame index
            sound_xiongdi1.tStart = t  # local t and not account for scr refresh
            sound_xiongdi1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_xiongdi1.started', tThisFlipGlobal)
            # update status
            sound_xiongdi1.status = STARTED
            sound_xiongdi1.play(when=win)  # sync with win flip
        
        # if sound_xiongdi1 is stopping this frame...
        if sound_xiongdi1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_xiongdi1.tStartRefresh + 3.0-frameTolerance or sound_xiongdi1.isFinished:
                # keep track of stop time/frame for later
                sound_xiongdi1.tStop = t  # not accounting for scr refresh
                sound_xiongdi1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_xiongdi1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_xiongdi1.stopped')
                # update status
                sound_xiongdi1.status = FINISHED
                sound_xiongdi1.stop()
        
        # *text_51* updates
        
        # if text_51 is starting this frame...
        if text_51.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_51.frameNStart = frameN  # exact frame index
            text_51.tStart = t  # local t and not account for scr refresh
            text_51.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_51, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_51.started')
            # update status
            text_51.status = STARTED
            text_51.setAutoDraw(True)
        
        # if text_51 is active this frame...
        if text_51.status == STARTED:
            # update params
            pass
        
        # if text_51 is stopping this frame...
        if text_51.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_51.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_51.tStop = t  # not accounting for scr refresh
                text_51.tStopRefresh = tThisFlipGlobal  # on global time
                text_51.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_51.stopped')
                # update status
                text_51.status = FINISHED
                text_51.setAutoDraw(False)
        
        # *text_52* updates
        
        # if text_52 is starting this frame...
        if text_52.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_52.frameNStart = frameN  # exact frame index
            text_52.tStart = t  # local t and not account for scr refresh
            text_52.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_52, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_52.started')
            # update status
            text_52.status = STARTED
            text_52.setAutoDraw(True)
        
        # if text_52 is active this frame...
        if text_52.status == STARTED:
            # update params
            pass
        
        # if text_52 is stopping this frame...
        if text_52.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_52.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_52.tStop = t  # not accounting for scr refresh
                text_52.tStopRefresh = tThisFlipGlobal  # on global time
                text_52.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_52.stopped')
                # update status
                text_52.status = FINISHED
                text_52.setAutoDraw(False)
        
        # *key_resp_xiongdi1* updates
        waitOnFlip = False
        
        # if key_resp_xiongdi1 is starting this frame...
        if key_resp_xiongdi1.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            key_resp_xiongdi1.frameNStart = frameN  # exact frame index
            key_resp_xiongdi1.tStart = t  # local t and not account for scr refresh
            key_resp_xiongdi1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_xiongdi1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_xiongdi1.started')
            # update status
            key_resp_xiongdi1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_xiongdi1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_xiongdi1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_xiongdi1 is stopping this frame...
        if key_resp_xiongdi1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_xiongdi1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_xiongdi1.tStop = t  # not accounting for scr refresh
                key_resp_xiongdi1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_xiongdi1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_xiongdi1.stopped')
                # update status
                key_resp_xiongdi1.status = FINISHED
                key_resp_xiongdi1.status = FINISHED
        if key_resp_xiongdi1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_xiongdi1.getKeys(keyList=['y','n','left','right','space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_xiongdi1_allKeys.extend(theseKeys)
            if len(_key_resp_xiongdi1_allKeys):
                key_resp_xiongdi1.keys = _key_resp_xiongdi1_allKeys[0].name  # just the first key pressed
                key_resp_xiongdi1.rt = _key_resp_xiongdi1_allKeys[0].rt
                key_resp_xiongdi1.duration = _key_resp_xiongdi1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_xiongdi1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialxiongdi1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialxiongdi1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialxiongdi1" ---
    for thisComponent in trialxiongdi1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialxiongdi1
    trialxiongdi1.tStop = globalClock.getTime(format='float')
    trialxiongdi1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialxiongdi1.stopped', trialxiongdi1.tStop)
    sound_xiongdi1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_xiongdi1.keys in ['', [], None]:  # No response was made
        key_resp_xiongdi1.keys = None
    thisExp.addData('key_resp_xiongdi1.keys',key_resp_xiongdi1.keys)
    if key_resp_xiongdi1.keys != None:  # we had a response
        thisExp.addData('key_resp_xiongdi1.rt', key_resp_xiongdi1.rt)
        thisExp.addData('key_resp_xiongdi1.duration', key_resp_xiongdi1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialxiongdi1.maxDurationReached:
        routineTimer.addTime(-trialxiongdi1.maxDuration)
    elif trialxiongdi1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "triallianxiang1" ---
    # create an object to store info about Routine triallianxiang1
    triallianxiang1 = data.Routine(
        name='triallianxiang1',
        components=[text_lianxiang1, sound_lianxiang1, text_53, text_54, key_resp_lianxiang1],
    )
    triallianxiang1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_lianxiang1.setSound('听力/联想-专有.wav', secs=3.0, hamming=True)
    sound_lianxiang1.setVolume(1.0, log=False)
    sound_lianxiang1.seek(0)
    # create starting attributes for key_resp_lianxiang1
    key_resp_lianxiang1.keys = []
    key_resp_lianxiang1.rt = []
    _key_resp_lianxiang1_allKeys = []
    # store start times for triallianxiang1
    triallianxiang1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    triallianxiang1.tStart = globalClock.getTime(format='float')
    triallianxiang1.status = STARTED
    thisExp.addData('triallianxiang1.started', triallianxiang1.tStart)
    triallianxiang1.maxDuration = None
    # keep track of which components have finished
    triallianxiang1Components = triallianxiang1.components
    for thisComponent in triallianxiang1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "triallianxiang1" ---
    triallianxiang1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_lianxiang1* updates
        
        # if text_lianxiang1 is starting this frame...
        if text_lianxiang1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_lianxiang1.frameNStart = frameN  # exact frame index
            text_lianxiang1.tStart = t  # local t and not account for scr refresh
            text_lianxiang1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_lianxiang1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_lianxiang1.started')
            # update status
            text_lianxiang1.status = STARTED
            text_lianxiang1.setAutoDraw(True)
        
        # if text_lianxiang1 is active this frame...
        if text_lianxiang1.status == STARTED:
            # update params
            pass
        
        # if text_lianxiang1 is stopping this frame...
        if text_lianxiang1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_lianxiang1.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                text_lianxiang1.tStop = t  # not accounting for scr refresh
                text_lianxiang1.tStopRefresh = tThisFlipGlobal  # on global time
                text_lianxiang1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_lianxiang1.stopped')
                # update status
                text_lianxiang1.status = FINISHED
                text_lianxiang1.setAutoDraw(False)
        
        # *sound_lianxiang1* updates
        
        # if sound_lianxiang1 is starting this frame...
        if sound_lianxiang1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_lianxiang1.frameNStart = frameN  # exact frame index
            sound_lianxiang1.tStart = t  # local t and not account for scr refresh
            sound_lianxiang1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_lianxiang1.started', tThisFlipGlobal)
            # update status
            sound_lianxiang1.status = STARTED
            sound_lianxiang1.play(when=win)  # sync with win flip
        
        # if sound_lianxiang1 is stopping this frame...
        if sound_lianxiang1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_lianxiang1.tStartRefresh + 3.0-frameTolerance or sound_lianxiang1.isFinished:
                # keep track of stop time/frame for later
                sound_lianxiang1.tStop = t  # not accounting for scr refresh
                sound_lianxiang1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_lianxiang1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_lianxiang1.stopped')
                # update status
                sound_lianxiang1.status = FINISHED
                sound_lianxiang1.stop()
        
        # *text_53* updates
        
        # if text_53 is starting this frame...
        if text_53.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_53.frameNStart = frameN  # exact frame index
            text_53.tStart = t  # local t and not account for scr refresh
            text_53.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_53, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_53.started')
            # update status
            text_53.status = STARTED
            text_53.setAutoDraw(True)
        
        # if text_53 is active this frame...
        if text_53.status == STARTED:
            # update params
            pass
        
        # if text_53 is stopping this frame...
        if text_53.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_53.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_53.tStop = t  # not accounting for scr refresh
                text_53.tStopRefresh = tThisFlipGlobal  # on global time
                text_53.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_53.stopped')
                # update status
                text_53.status = FINISHED
                text_53.setAutoDraw(False)
        
        # *text_54* updates
        
        # if text_54 is starting this frame...
        if text_54.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            text_54.frameNStart = frameN  # exact frame index
            text_54.tStart = t  # local t and not account for scr refresh
            text_54.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_54, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_54.started')
            # update status
            text_54.status = STARTED
            text_54.setAutoDraw(True)
        
        # if text_54 is active this frame...
        if text_54.status == STARTED:
            # update params
            pass
        
        # if text_54 is stopping this frame...
        if text_54.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_54.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                text_54.tStop = t  # not accounting for scr refresh
                text_54.tStopRefresh = tThisFlipGlobal  # on global time
                text_54.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_54.stopped')
                # update status
                text_54.status = FINISHED
                text_54.setAutoDraw(False)
        
        # *key_resp_lianxiang1* updates
        waitOnFlip = False
        
        # if key_resp_lianxiang1 is starting this frame...
        if key_resp_lianxiang1.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            key_resp_lianxiang1.frameNStart = frameN  # exact frame index
            key_resp_lianxiang1.tStart = t  # local t and not account for scr refresh
            key_resp_lianxiang1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_lianxiang1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_lianxiang1.started')
            # update status
            key_resp_lianxiang1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_lianxiang1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_lianxiang1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_lianxiang1 is stopping this frame...
        if key_resp_lianxiang1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_lianxiang1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_lianxiang1.tStop = t  # not accounting for scr refresh
                key_resp_lianxiang1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_lianxiang1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_lianxiang1.stopped')
                # update status
                key_resp_lianxiang1.status = FINISHED
                key_resp_lianxiang1.status = FINISHED
        if key_resp_lianxiang1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_lianxiang1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_lianxiang1_allKeys.extend(theseKeys)
            if len(_key_resp_lianxiang1_allKeys):
                key_resp_lianxiang1.keys = _key_resp_lianxiang1_allKeys[0].name  # just the first key pressed
                key_resp_lianxiang1.rt = _key_resp_lianxiang1_allKeys[0].rt
                key_resp_lianxiang1.duration = _key_resp_lianxiang1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_lianxiang1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            triallianxiang1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in triallianxiang1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "triallianxiang1" ---
    for thisComponent in triallianxiang1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for triallianxiang1
    triallianxiang1.tStop = globalClock.getTime(format='float')
    triallianxiang1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('triallianxiang1.stopped', triallianxiang1.tStop)
    sound_lianxiang1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_lianxiang1.keys in ['', [], None]:  # No response was made
        key_resp_lianxiang1.keys = None
    thisExp.addData('key_resp_lianxiang1.keys',key_resp_lianxiang1.keys)
    if key_resp_lianxiang1.keys != None:  # we had a response
        thisExp.addData('key_resp_lianxiang1.rt', key_resp_lianxiang1.rt)
        thisExp.addData('key_resp_lianxiang1.duration', key_resp_lianxiang1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if triallianxiang1.maxDurationReached:
        routineTimer.addTime(-triallianxiang1.maxDuration)
    elif triallianxiang1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialchaguan1" ---
    # create an object to store info about Routine trialchaguan1
    trialchaguan1 = data.Routine(
        name='trialchaguan1',
        components=[text_chaguan1, sound_chaguan1, text_55, text_56, key_resp_chaguan1],
    )
    trialchaguan1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_chaguan1.setSound('A', secs=3.0, hamming=True)
    sound_chaguan1.setVolume(1.0, log=False)
    sound_chaguan1.seek(0)
    # create starting attributes for key_resp_chaguan1
    key_resp_chaguan1.keys = []
    key_resp_chaguan1.rt = []
    _key_resp_chaguan1_allKeys = []
    # store start times for trialchaguan1
    trialchaguan1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialchaguan1.tStart = globalClock.getTime(format='float')
    trialchaguan1.status = STARTED
    thisExp.addData('trialchaguan1.started', trialchaguan1.tStart)
    trialchaguan1.maxDuration = None
    # keep track of which components have finished
    trialchaguan1Components = trialchaguan1.components
    for thisComponent in trialchaguan1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialchaguan1" ---
    trialchaguan1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_chaguan1* updates
        
        # if text_chaguan1 is starting this frame...
        if text_chaguan1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_chaguan1.frameNStart = frameN  # exact frame index
            text_chaguan1.tStart = t  # local t and not account for scr refresh
            text_chaguan1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_chaguan1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_chaguan1.started')
            # update status
            text_chaguan1.status = STARTED
            text_chaguan1.setAutoDraw(True)
        
        # if text_chaguan1 is active this frame...
        if text_chaguan1.status == STARTED:
            # update params
            pass
        
        # if text_chaguan1 is stopping this frame...
        if text_chaguan1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_chaguan1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_chaguan1.tStop = t  # not accounting for scr refresh
                text_chaguan1.tStopRefresh = tThisFlipGlobal  # on global time
                text_chaguan1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_chaguan1.stopped')
                # update status
                text_chaguan1.status = FINISHED
                text_chaguan1.setAutoDraw(False)
        
        # *sound_chaguan1* updates
        
        # if sound_chaguan1 is starting this frame...
        if sound_chaguan1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_chaguan1.frameNStart = frameN  # exact frame index
            sound_chaguan1.tStart = t  # local t and not account for scr refresh
            sound_chaguan1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_chaguan1.started', tThisFlipGlobal)
            # update status
            sound_chaguan1.status = STARTED
            sound_chaguan1.play(when=win)  # sync with win flip
        
        # if sound_chaguan1 is stopping this frame...
        if sound_chaguan1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_chaguan1.tStartRefresh + 3.0-frameTolerance or sound_chaguan1.isFinished:
                # keep track of stop time/frame for later
                sound_chaguan1.tStop = t  # not accounting for scr refresh
                sound_chaguan1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_chaguan1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_chaguan1.stopped')
                # update status
                sound_chaguan1.status = FINISHED
                sound_chaguan1.stop()
        
        # *text_55* updates
        
        # if text_55 is starting this frame...
        if text_55.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
            # keep track of start time/frame for later
            text_55.frameNStart = frameN  # exact frame index
            text_55.tStart = t  # local t and not account for scr refresh
            text_55.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_55, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_55.started')
            # update status
            text_55.status = STARTED
            text_55.setAutoDraw(True)
        
        # if text_55 is active this frame...
        if text_55.status == STARTED:
            # update params
            pass
        
        # if text_55 is stopping this frame...
        if text_55.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_55.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                text_55.tStop = t  # not accounting for scr refresh
                text_55.tStopRefresh = tThisFlipGlobal  # on global time
                text_55.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_55.stopped')
                # update status
                text_55.status = FINISHED
                text_55.setAutoDraw(False)
        
        # *text_56* updates
        
        # if text_56 is starting this frame...
        if text_56.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            text_56.frameNStart = frameN  # exact frame index
            text_56.tStart = t  # local t and not account for scr refresh
            text_56.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_56, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_56.started')
            # update status
            text_56.status = STARTED
            text_56.setAutoDraw(True)
        
        # if text_56 is active this frame...
        if text_56.status == STARTED:
            # update params
            pass
        
        # if text_56 is stopping this frame...
        if text_56.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_56.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                text_56.tStop = t  # not accounting for scr refresh
                text_56.tStopRefresh = tThisFlipGlobal  # on global time
                text_56.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_56.stopped')
                # update status
                text_56.status = FINISHED
                text_56.setAutoDraw(False)
        
        # *key_resp_chaguan1* updates
        waitOnFlip = False
        
        # if key_resp_chaguan1 is starting this frame...
        if key_resp_chaguan1.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            key_resp_chaguan1.frameNStart = frameN  # exact frame index
            key_resp_chaguan1.tStart = t  # local t and not account for scr refresh
            key_resp_chaguan1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_chaguan1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_chaguan1.started')
            # update status
            key_resp_chaguan1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_chaguan1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_chaguan1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_chaguan1 is stopping this frame...
        if key_resp_chaguan1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_chaguan1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_chaguan1.tStop = t  # not accounting for scr refresh
                key_resp_chaguan1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_chaguan1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_chaguan1.stopped')
                # update status
                key_resp_chaguan1.status = FINISHED
                key_resp_chaguan1.status = FINISHED
        if key_resp_chaguan1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_chaguan1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_chaguan1_allKeys.extend(theseKeys)
            if len(_key_resp_chaguan1_allKeys):
                key_resp_chaguan1.keys = _key_resp_chaguan1_allKeys[0].name  # just the first key pressed
                key_resp_chaguan1.rt = _key_resp_chaguan1_allKeys[0].rt
                key_resp_chaguan1.duration = _key_resp_chaguan1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_chaguan1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialchaguan1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialchaguan1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialchaguan1" ---
    for thisComponent in trialchaguan1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialchaguan1
    trialchaguan1.tStop = globalClock.getTime(format='float')
    trialchaguan1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialchaguan1.stopped', trialchaguan1.tStop)
    sound_chaguan1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_chaguan1.keys in ['', [], None]:  # No response was made
        key_resp_chaguan1.keys = None
    thisExp.addData('key_resp_chaguan1.keys',key_resp_chaguan1.keys)
    if key_resp_chaguan1.keys != None:  # we had a response
        thisExp.addData('key_resp_chaguan1.rt', key_resp_chaguan1.rt)
        thisExp.addData('key_resp_chaguan1.duration', key_resp_chaguan1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialchaguan1.maxDurationReached:
        routineTimer.addTime(-trialchaguan1.maxDuration)
    elif trialchaguan1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialnanhai0" ---
    # create an object to store info about Routine trialnanhai0
    trialnanhai0 = data.Routine(
        name='trialnanhai0',
        components=[text_nanhai0, sound_nanhai0, text_57, text_58, key_resp_nanhai0],
    )
    trialnanhai0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_nanhai0.setSound('A', secs=3.0, hamming=True)
    sound_nanhai0.setVolume(1.0, log=False)
    sound_nanhai0.seek(0)
    # create starting attributes for key_resp_nanhai0
    key_resp_nanhai0.keys = []
    key_resp_nanhai0.rt = []
    _key_resp_nanhai0_allKeys = []
    # store start times for trialnanhai0
    trialnanhai0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialnanhai0.tStart = globalClock.getTime(format='float')
    trialnanhai0.status = STARTED
    thisExp.addData('trialnanhai0.started', trialnanhai0.tStart)
    trialnanhai0.maxDuration = None
    # keep track of which components have finished
    trialnanhai0Components = trialnanhai0.components
    for thisComponent in trialnanhai0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialnanhai0" ---
    trialnanhai0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_nanhai0* updates
        
        # if text_nanhai0 is starting this frame...
        if text_nanhai0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_nanhai0.frameNStart = frameN  # exact frame index
            text_nanhai0.tStart = t  # local t and not account for scr refresh
            text_nanhai0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_nanhai0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_nanhai0.started')
            # update status
            text_nanhai0.status = STARTED
            text_nanhai0.setAutoDraw(True)
        
        # if text_nanhai0 is active this frame...
        if text_nanhai0.status == STARTED:
            # update params
            pass
        
        # if text_nanhai0 is stopping this frame...
        if text_nanhai0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_nanhai0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_nanhai0.tStop = t  # not accounting for scr refresh
                text_nanhai0.tStopRefresh = tThisFlipGlobal  # on global time
                text_nanhai0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_nanhai0.stopped')
                # update status
                text_nanhai0.status = FINISHED
                text_nanhai0.setAutoDraw(False)
        
        # *sound_nanhai0* updates
        
        # if sound_nanhai0 is starting this frame...
        if sound_nanhai0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_nanhai0.frameNStart = frameN  # exact frame index
            sound_nanhai0.tStart = t  # local t and not account for scr refresh
            sound_nanhai0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_nanhai0.started', tThisFlipGlobal)
            # update status
            sound_nanhai0.status = STARTED
            sound_nanhai0.play(when=win)  # sync with win flip
        
        # if sound_nanhai0 is stopping this frame...
        if sound_nanhai0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_nanhai0.tStartRefresh + 3.0-frameTolerance or sound_nanhai0.isFinished:
                # keep track of stop time/frame for later
                sound_nanhai0.tStop = t  # not accounting for scr refresh
                sound_nanhai0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_nanhai0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_nanhai0.stopped')
                # update status
                sound_nanhai0.status = FINISHED
                sound_nanhai0.stop()
        
        # *text_57* updates
        
        # if text_57 is starting this frame...
        if text_57.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_57.frameNStart = frameN  # exact frame index
            text_57.tStart = t  # local t and not account for scr refresh
            text_57.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_57, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_57.started')
            # update status
            text_57.status = STARTED
            text_57.setAutoDraw(True)
        
        # if text_57 is active this frame...
        if text_57.status == STARTED:
            # update params
            pass
        
        # if text_57 is stopping this frame...
        if text_57.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_57.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_57.tStop = t  # not accounting for scr refresh
                text_57.tStopRefresh = tThisFlipGlobal  # on global time
                text_57.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_57.stopped')
                # update status
                text_57.status = FINISHED
                text_57.setAutoDraw(False)
        
        # *text_58* updates
        
        # if text_58 is starting this frame...
        if text_58.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_58.frameNStart = frameN  # exact frame index
            text_58.tStart = t  # local t and not account for scr refresh
            text_58.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_58, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_58.started')
            # update status
            text_58.status = STARTED
            text_58.setAutoDraw(True)
        
        # if text_58 is active this frame...
        if text_58.status == STARTED:
            # update params
            pass
        
        # if text_58 is stopping this frame...
        if text_58.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_58.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_58.tStop = t  # not accounting for scr refresh
                text_58.tStopRefresh = tThisFlipGlobal  # on global time
                text_58.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_58.stopped')
                # update status
                text_58.status = FINISHED
                text_58.setAutoDraw(False)
        
        # *key_resp_nanhai0* updates
        waitOnFlip = False
        
        # if key_resp_nanhai0 is starting this frame...
        if key_resp_nanhai0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_nanhai0.frameNStart = frameN  # exact frame index
            key_resp_nanhai0.tStart = t  # local t and not account for scr refresh
            key_resp_nanhai0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_nanhai0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_nanhai0.started')
            # update status
            key_resp_nanhai0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_nanhai0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_nanhai0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_nanhai0 is stopping this frame...
        if key_resp_nanhai0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_nanhai0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_nanhai0.tStop = t  # not accounting for scr refresh
                key_resp_nanhai0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_nanhai0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_nanhai0.stopped')
                # update status
                key_resp_nanhai0.status = FINISHED
                key_resp_nanhai0.status = FINISHED
        if key_resp_nanhai0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_nanhai0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_nanhai0_allKeys.extend(theseKeys)
            if len(_key_resp_nanhai0_allKeys):
                key_resp_nanhai0.keys = _key_resp_nanhai0_allKeys[0].name  # just the first key pressed
                key_resp_nanhai0.rt = _key_resp_nanhai0_allKeys[0].rt
                key_resp_nanhai0.duration = _key_resp_nanhai0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_nanhai0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialnanhai0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialnanhai0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialnanhai0" ---
    for thisComponent in trialnanhai0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialnanhai0
    trialnanhai0.tStop = globalClock.getTime(format='float')
    trialnanhai0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialnanhai0.stopped', trialnanhai0.tStop)
    sound_nanhai0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_nanhai0.keys in ['', [], None]:  # No response was made
        key_resp_nanhai0.keys = None
    thisExp.addData('key_resp_nanhai0.keys',key_resp_nanhai0.keys)
    if key_resp_nanhai0.keys != None:  # we had a response
        thisExp.addData('key_resp_nanhai0.rt', key_resp_nanhai0.rt)
        thisExp.addData('key_resp_nanhai0.duration', key_resp_nanhai0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialnanhai0.maxDurationReached:
        routineTimer.addTime(-trialnanhai0.maxDuration)
    elif trialnanhai0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialbaimao1" ---
    # create an object to store info about Routine trialbaimao1
    trialbaimao1 = data.Routine(
        name='trialbaimao1',
        components=[text_baimao1, sound_baimao1, text_59, text_60, key_resp_baimao1],
    )
    trialbaimao1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_baimao1.setSound('听力/白猫-专有.wav', secs=3.0, hamming=True)
    sound_baimao1.setVolume(1.0, log=False)
    sound_baimao1.seek(0)
    # create starting attributes for key_resp_baimao1
    key_resp_baimao1.keys = []
    key_resp_baimao1.rt = []
    _key_resp_baimao1_allKeys = []
    # store start times for trialbaimao1
    trialbaimao1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialbaimao1.tStart = globalClock.getTime(format='float')
    trialbaimao1.status = STARTED
    thisExp.addData('trialbaimao1.started', trialbaimao1.tStart)
    trialbaimao1.maxDuration = None
    # keep track of which components have finished
    trialbaimao1Components = trialbaimao1.components
    for thisComponent in trialbaimao1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialbaimao1" ---
    trialbaimao1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_baimao1* updates
        
        # if text_baimao1 is starting this frame...
        if text_baimao1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_baimao1.frameNStart = frameN  # exact frame index
            text_baimao1.tStart = t  # local t and not account for scr refresh
            text_baimao1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_baimao1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_baimao1.started')
            # update status
            text_baimao1.status = STARTED
            text_baimao1.setAutoDraw(True)
        
        # if text_baimao1 is active this frame...
        if text_baimao1.status == STARTED:
            # update params
            pass
        
        # if text_baimao1 is stopping this frame...
        if text_baimao1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_baimao1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_baimao1.tStop = t  # not accounting for scr refresh
                text_baimao1.tStopRefresh = tThisFlipGlobal  # on global time
                text_baimao1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_baimao1.stopped')
                # update status
                text_baimao1.status = FINISHED
                text_baimao1.setAutoDraw(False)
        
        # *sound_baimao1* updates
        
        # if sound_baimao1 is starting this frame...
        if sound_baimao1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_baimao1.frameNStart = frameN  # exact frame index
            sound_baimao1.tStart = t  # local t and not account for scr refresh
            sound_baimao1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_baimao1.started', tThisFlipGlobal)
            # update status
            sound_baimao1.status = STARTED
            sound_baimao1.play(when=win)  # sync with win flip
        
        # if sound_baimao1 is stopping this frame...
        if sound_baimao1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_baimao1.tStartRefresh + 3.0-frameTolerance or sound_baimao1.isFinished:
                # keep track of stop time/frame for later
                sound_baimao1.tStop = t  # not accounting for scr refresh
                sound_baimao1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_baimao1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_baimao1.stopped')
                # update status
                sound_baimao1.status = FINISHED
                sound_baimao1.stop()
        
        # *text_59* updates
        
        # if text_59 is starting this frame...
        if text_59.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
            # keep track of start time/frame for later
            text_59.frameNStart = frameN  # exact frame index
            text_59.tStart = t  # local t and not account for scr refresh
            text_59.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_59, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_59.started')
            # update status
            text_59.status = STARTED
            text_59.setAutoDraw(True)
        
        # if text_59 is active this frame...
        if text_59.status == STARTED:
            # update params
            pass
        
        # if text_59 is stopping this frame...
        if text_59.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_59.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                text_59.tStop = t  # not accounting for scr refresh
                text_59.tStopRefresh = tThisFlipGlobal  # on global time
                text_59.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_59.stopped')
                # update status
                text_59.status = FINISHED
                text_59.setAutoDraw(False)
        
        # *text_60* updates
        
        # if text_60 is starting this frame...
        if text_60.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_60.frameNStart = frameN  # exact frame index
            text_60.tStart = t  # local t and not account for scr refresh
            text_60.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_60, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_60.started')
            # update status
            text_60.status = STARTED
            text_60.setAutoDraw(True)
        
        # if text_60 is active this frame...
        if text_60.status == STARTED:
            # update params
            pass
        
        # if text_60 is stopping this frame...
        if text_60.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_60.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_60.tStop = t  # not accounting for scr refresh
                text_60.tStopRefresh = tThisFlipGlobal  # on global time
                text_60.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_60.stopped')
                # update status
                text_60.status = FINISHED
                text_60.setAutoDraw(False)
        
        # *key_resp_baimao1* updates
        waitOnFlip = False
        
        # if key_resp_baimao1 is starting this frame...
        if key_resp_baimao1.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            key_resp_baimao1.frameNStart = frameN  # exact frame index
            key_resp_baimao1.tStart = t  # local t and not account for scr refresh
            key_resp_baimao1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_baimao1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_baimao1.started')
            # update status
            key_resp_baimao1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_baimao1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_baimao1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_baimao1 is stopping this frame...
        if key_resp_baimao1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_baimao1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_baimao1.tStop = t  # not accounting for scr refresh
                key_resp_baimao1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_baimao1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_baimao1.stopped')
                # update status
                key_resp_baimao1.status = FINISHED
                key_resp_baimao1.status = FINISHED
        if key_resp_baimao1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_baimao1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_baimao1_allKeys.extend(theseKeys)
            if len(_key_resp_baimao1_allKeys):
                key_resp_baimao1.keys = _key_resp_baimao1_allKeys[0].name  # just the first key pressed
                key_resp_baimao1.rt = _key_resp_baimao1_allKeys[0].rt
                key_resp_baimao1.duration = _key_resp_baimao1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_baimao1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialbaimao1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialbaimao1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialbaimao1" ---
    for thisComponent in trialbaimao1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialbaimao1
    trialbaimao1.tStop = globalClock.getTime(format='float')
    trialbaimao1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialbaimao1.stopped', trialbaimao1.tStop)
    sound_baimao1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_baimao1.keys in ['', [], None]:  # No response was made
        key_resp_baimao1.keys = None
    thisExp.addData('key_resp_baimao1.keys',key_resp_baimao1.keys)
    if key_resp_baimao1.keys != None:  # we had a response
        thisExp.addData('key_resp_baimao1.rt', key_resp_baimao1.rt)
        thisExp.addData('key_resp_baimao1.duration', key_resp_baimao1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialbaimao1.maxDurationReached:
        routineTimer.addTime(-trialbaimao1.maxDuration)
    elif trialbaimao1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialyanjing" ---
    # create an object to store info about Routine trialyanjing
    trialyanjing = data.Routine(
        name='trialyanjing',
        components=[text_yanjing, sound_yanjing, text_61, text_62, key_resp_yanjing],
    )
    trialyanjing.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_yanjing.setSound('听力/眼睛-单义.wav', secs=3, hamming=True)
    sound_yanjing.setVolume(1.0, log=False)
    sound_yanjing.seek(0)
    # create starting attributes for key_resp_yanjing
    key_resp_yanjing.keys = []
    key_resp_yanjing.rt = []
    _key_resp_yanjing_allKeys = []
    # store start times for trialyanjing
    trialyanjing.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialyanjing.tStart = globalClock.getTime(format='float')
    trialyanjing.status = STARTED
    thisExp.addData('trialyanjing.started', trialyanjing.tStart)
    trialyanjing.maxDuration = None
    # keep track of which components have finished
    trialyanjingComponents = trialyanjing.components
    for thisComponent in trialyanjing.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialyanjing" ---
    trialyanjing.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_yanjing* updates
        
        # if text_yanjing is starting this frame...
        if text_yanjing.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_yanjing.frameNStart = frameN  # exact frame index
            text_yanjing.tStart = t  # local t and not account for scr refresh
            text_yanjing.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_yanjing, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_yanjing.started')
            # update status
            text_yanjing.status = STARTED
            text_yanjing.setAutoDraw(True)
        
        # if text_yanjing is active this frame...
        if text_yanjing.status == STARTED:
            # update params
            pass
        
        # if text_yanjing is stopping this frame...
        if text_yanjing.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_yanjing.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_yanjing.tStop = t  # not accounting for scr refresh
                text_yanjing.tStopRefresh = tThisFlipGlobal  # on global time
                text_yanjing.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_yanjing.stopped')
                # update status
                text_yanjing.status = FINISHED
                text_yanjing.setAutoDraw(False)
        
        # *sound_yanjing* updates
        
        # if sound_yanjing is starting this frame...
        if sound_yanjing.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_yanjing.frameNStart = frameN  # exact frame index
            sound_yanjing.tStart = t  # local t and not account for scr refresh
            sound_yanjing.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_yanjing.started', tThisFlipGlobal)
            # update status
            sound_yanjing.status = STARTED
            sound_yanjing.play(when=win)  # sync with win flip
        
        # if sound_yanjing is stopping this frame...
        if sound_yanjing.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_yanjing.tStartRefresh + 3-frameTolerance or sound_yanjing.isFinished:
                # keep track of stop time/frame for later
                sound_yanjing.tStop = t  # not accounting for scr refresh
                sound_yanjing.tStopRefresh = tThisFlipGlobal  # on global time
                sound_yanjing.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_yanjing.stopped')
                # update status
                sound_yanjing.status = FINISHED
                sound_yanjing.stop()
        
        # *text_61* updates
        
        # if text_61 is starting this frame...
        if text_61.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
            # keep track of start time/frame for later
            text_61.frameNStart = frameN  # exact frame index
            text_61.tStart = t  # local t and not account for scr refresh
            text_61.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_61, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_61.started')
            # update status
            text_61.status = STARTED
            text_61.setAutoDraw(True)
        
        # if text_61 is active this frame...
        if text_61.status == STARTED:
            # update params
            pass
        
        # if text_61 is stopping this frame...
        if text_61.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_61.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                text_61.tStop = t  # not accounting for scr refresh
                text_61.tStopRefresh = tThisFlipGlobal  # on global time
                text_61.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_61.stopped')
                # update status
                text_61.status = FINISHED
                text_61.setAutoDraw(False)
        
        # *text_62* updates
        
        # if text_62 is starting this frame...
        if text_62.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            text_62.frameNStart = frameN  # exact frame index
            text_62.tStart = t  # local t and not account for scr refresh
            text_62.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_62, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_62.started')
            # update status
            text_62.status = STARTED
            text_62.setAutoDraw(True)
        
        # if text_62 is active this frame...
        if text_62.status == STARTED:
            # update params
            pass
        
        # if text_62 is stopping this frame...
        if text_62.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_62.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                text_62.tStop = t  # not accounting for scr refresh
                text_62.tStopRefresh = tThisFlipGlobal  # on global time
                text_62.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_62.stopped')
                # update status
                text_62.status = FINISHED
                text_62.setAutoDraw(False)
        
        # *key_resp_yanjing* updates
        waitOnFlip = False
        
        # if key_resp_yanjing is starting this frame...
        if key_resp_yanjing.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            key_resp_yanjing.frameNStart = frameN  # exact frame index
            key_resp_yanjing.tStart = t  # local t and not account for scr refresh
            key_resp_yanjing.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_yanjing, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_yanjing.started')
            # update status
            key_resp_yanjing.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_yanjing.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_yanjing.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_yanjing is stopping this frame...
        if key_resp_yanjing.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_yanjing.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_yanjing.tStop = t  # not accounting for scr refresh
                key_resp_yanjing.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_yanjing.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_yanjing.stopped')
                # update status
                key_resp_yanjing.status = FINISHED
                key_resp_yanjing.status = FINISHED
        if key_resp_yanjing.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_yanjing.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_yanjing_allKeys.extend(theseKeys)
            if len(_key_resp_yanjing_allKeys):
                key_resp_yanjing.keys = _key_resp_yanjing_allKeys[0].name  # just the first key pressed
                key_resp_yanjing.rt = _key_resp_yanjing_allKeys[0].rt
                key_resp_yanjing.duration = _key_resp_yanjing_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_yanjing]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialyanjing.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialyanjing.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialyanjing" ---
    for thisComponent in trialyanjing.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialyanjing
    trialyanjing.tStop = globalClock.getTime(format='float')
    trialyanjing.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialyanjing.stopped', trialyanjing.tStop)
    sound_yanjing.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_yanjing.keys in ['', [], None]:  # No response was made
        key_resp_yanjing.keys = None
    thisExp.addData('key_resp_yanjing.keys',key_resp_yanjing.keys)
    if key_resp_yanjing.keys != None:  # we had a response
        thisExp.addData('key_resp_yanjing.rt', key_resp_yanjing.rt)
        thisExp.addData('key_resp_yanjing.duration', key_resp_yanjing.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialyanjing.maxDurationReached:
        routineTimer.addTime(-trialyanjing.maxDuration)
    elif trialyanjing.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialqingfeng1" ---
    # create an object to store info about Routine trialqingfeng1
    trialqingfeng1 = data.Routine(
        name='trialqingfeng1',
        components=[text_qingfeng1, sound_qingfeng1, text_63, text_64, key_resp_qingfeng1],
    )
    trialqingfeng1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_qingfeng1.setSound('听力/清风-专有.wav', secs=3.0, hamming=True)
    sound_qingfeng1.setVolume(1.0, log=False)
    sound_qingfeng1.seek(0)
    # create starting attributes for key_resp_qingfeng1
    key_resp_qingfeng1.keys = []
    key_resp_qingfeng1.rt = []
    _key_resp_qingfeng1_allKeys = []
    # store start times for trialqingfeng1
    trialqingfeng1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialqingfeng1.tStart = globalClock.getTime(format='float')
    trialqingfeng1.status = STARTED
    thisExp.addData('trialqingfeng1.started', trialqingfeng1.tStart)
    trialqingfeng1.maxDuration = None
    # keep track of which components have finished
    trialqingfeng1Components = trialqingfeng1.components
    for thisComponent in trialqingfeng1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialqingfeng1" ---
    trialqingfeng1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_qingfeng1* updates
        
        # if text_qingfeng1 is starting this frame...
        if text_qingfeng1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_qingfeng1.frameNStart = frameN  # exact frame index
            text_qingfeng1.tStart = t  # local t and not account for scr refresh
            text_qingfeng1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_qingfeng1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_qingfeng1.started')
            # update status
            text_qingfeng1.status = STARTED
            text_qingfeng1.setAutoDraw(True)
        
        # if text_qingfeng1 is active this frame...
        if text_qingfeng1.status == STARTED:
            # update params
            pass
        
        # if text_qingfeng1 is stopping this frame...
        if text_qingfeng1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_qingfeng1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_qingfeng1.tStop = t  # not accounting for scr refresh
                text_qingfeng1.tStopRefresh = tThisFlipGlobal  # on global time
                text_qingfeng1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_qingfeng1.stopped')
                # update status
                text_qingfeng1.status = FINISHED
                text_qingfeng1.setAutoDraw(False)
        
        # *sound_qingfeng1* updates
        
        # if sound_qingfeng1 is starting this frame...
        if sound_qingfeng1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_qingfeng1.frameNStart = frameN  # exact frame index
            sound_qingfeng1.tStart = t  # local t and not account for scr refresh
            sound_qingfeng1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_qingfeng1.started', tThisFlipGlobal)
            # update status
            sound_qingfeng1.status = STARTED
            sound_qingfeng1.play(when=win)  # sync with win flip
        
        # if sound_qingfeng1 is stopping this frame...
        if sound_qingfeng1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_qingfeng1.tStartRefresh + 3.0-frameTolerance or sound_qingfeng1.isFinished:
                # keep track of stop time/frame for later
                sound_qingfeng1.tStop = t  # not accounting for scr refresh
                sound_qingfeng1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_qingfeng1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_qingfeng1.stopped')
                # update status
                sound_qingfeng1.status = FINISHED
                sound_qingfeng1.stop()
        
        # *text_63* updates
        
        # if text_63 is starting this frame...
        if text_63.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_63.frameNStart = frameN  # exact frame index
            text_63.tStart = t  # local t and not account for scr refresh
            text_63.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_63, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_63.started')
            # update status
            text_63.status = STARTED
            text_63.setAutoDraw(True)
        
        # if text_63 is active this frame...
        if text_63.status == STARTED:
            # update params
            pass
        
        # if text_63 is stopping this frame...
        if text_63.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_63.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                text_63.tStop = t  # not accounting for scr refresh
                text_63.tStopRefresh = tThisFlipGlobal  # on global time
                text_63.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_63.stopped')
                # update status
                text_63.status = FINISHED
                text_63.setAutoDraw(False)
        
        # *text_64* updates
        
        # if text_64 is starting this frame...
        if text_64.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            text_64.frameNStart = frameN  # exact frame index
            text_64.tStart = t  # local t and not account for scr refresh
            text_64.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_64, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_64.started')
            # update status
            text_64.status = STARTED
            text_64.setAutoDraw(True)
        
        # if text_64 is active this frame...
        if text_64.status == STARTED:
            # update params
            pass
        
        # if text_64 is stopping this frame...
        if text_64.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_64.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                text_64.tStop = t  # not accounting for scr refresh
                text_64.tStopRefresh = tThisFlipGlobal  # on global time
                text_64.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_64.stopped')
                # update status
                text_64.status = FINISHED
                text_64.setAutoDraw(False)
        
        # *key_resp_qingfeng1* updates
        waitOnFlip = False
        
        # if key_resp_qingfeng1 is starting this frame...
        if key_resp_qingfeng1.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            key_resp_qingfeng1.frameNStart = frameN  # exact frame index
            key_resp_qingfeng1.tStart = t  # local t and not account for scr refresh
            key_resp_qingfeng1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_qingfeng1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_qingfeng1.started')
            # update status
            key_resp_qingfeng1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_qingfeng1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_qingfeng1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_qingfeng1 is stopping this frame...
        if key_resp_qingfeng1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_qingfeng1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_qingfeng1.tStop = t  # not accounting for scr refresh
                key_resp_qingfeng1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_qingfeng1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_qingfeng1.stopped')
                # update status
                key_resp_qingfeng1.status = FINISHED
                key_resp_qingfeng1.status = FINISHED
        if key_resp_qingfeng1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_qingfeng1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_qingfeng1_allKeys.extend(theseKeys)
            if len(_key_resp_qingfeng1_allKeys):
                key_resp_qingfeng1.keys = _key_resp_qingfeng1_allKeys[0].name  # just the first key pressed
                key_resp_qingfeng1.rt = _key_resp_qingfeng1_allKeys[0].rt
                key_resp_qingfeng1.duration = _key_resp_qingfeng1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_qingfeng1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialqingfeng1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialqingfeng1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialqingfeng1" ---
    for thisComponent in trialqingfeng1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialqingfeng1
    trialqingfeng1.tStop = globalClock.getTime(format='float')
    trialqingfeng1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialqingfeng1.stopped', trialqingfeng1.tStop)
    sound_qingfeng1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_qingfeng1.keys in ['', [], None]:  # No response was made
        key_resp_qingfeng1.keys = None
    thisExp.addData('key_resp_qingfeng1.keys',key_resp_qingfeng1.keys)
    if key_resp_qingfeng1.keys != None:  # we had a response
        thisExp.addData('key_resp_qingfeng1.rt', key_resp_qingfeng1.rt)
        thisExp.addData('key_resp_qingfeng1.duration', key_resp_qingfeng1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialqingfeng1.maxDurationReached:
        routineTimer.addTime(-trialqingfeng1.maxDuration)
    elif trialqingfeng1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialluotuo1" ---
    # create an object to store info about Routine trialluotuo1
    trialluotuo1 = data.Routine(
        name='trialluotuo1',
        components=[text_luotuo1, text_65, text_66, key_resp_luotuo1],
    )
    trialluotuo1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_luotuo1
    key_resp_luotuo1.keys = []
    key_resp_luotuo1.rt = []
    _key_resp_luotuo1_allKeys = []
    # store start times for trialluotuo1
    trialluotuo1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialluotuo1.tStart = globalClock.getTime(format='float')
    trialluotuo1.status = STARTED
    thisExp.addData('trialluotuo1.started', trialluotuo1.tStart)
    trialluotuo1.maxDuration = None
    # keep track of which components have finished
    trialluotuo1Components = trialluotuo1.components
    for thisComponent in trialluotuo1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialluotuo1" ---
    trialluotuo1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_luotuo1* updates
        
        # if text_luotuo1 is starting this frame...
        if text_luotuo1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_luotuo1.frameNStart = frameN  # exact frame index
            text_luotuo1.tStart = t  # local t and not account for scr refresh
            text_luotuo1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_luotuo1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_luotuo1.started')
            # update status
            text_luotuo1.status = STARTED
            text_luotuo1.setAutoDraw(True)
        
        # if text_luotuo1 is active this frame...
        if text_luotuo1.status == STARTED:
            # update params
            pass
        
        # if text_luotuo1 is stopping this frame...
        if text_luotuo1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_luotuo1.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                text_luotuo1.tStop = t  # not accounting for scr refresh
                text_luotuo1.tStopRefresh = tThisFlipGlobal  # on global time
                text_luotuo1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_luotuo1.stopped')
                # update status
                text_luotuo1.status = FINISHED
                text_luotuo1.setAutoDraw(False)
        
        # *text_65* updates
        
        # if text_65 is starting this frame...
        if text_65.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_65.frameNStart = frameN  # exact frame index
            text_65.tStart = t  # local t and not account for scr refresh
            text_65.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_65, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_65.started')
            # update status
            text_65.status = STARTED
            text_65.setAutoDraw(True)
        
        # if text_65 is active this frame...
        if text_65.status == STARTED:
            # update params
            pass
        
        # if text_65 is stopping this frame...
        if text_65.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_65.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                text_65.tStop = t  # not accounting for scr refresh
                text_65.tStopRefresh = tThisFlipGlobal  # on global time
                text_65.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_65.stopped')
                # update status
                text_65.status = FINISHED
                text_65.setAutoDraw(False)
        
        # *text_66* updates
        
        # if text_66 is starting this frame...
        if text_66.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            text_66.frameNStart = frameN  # exact frame index
            text_66.tStart = t  # local t and not account for scr refresh
            text_66.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_66, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_66.started')
            # update status
            text_66.status = STARTED
            text_66.setAutoDraw(True)
        
        # if text_66 is active this frame...
        if text_66.status == STARTED:
            # update params
            pass
        
        # if text_66 is stopping this frame...
        if text_66.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_66.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                text_66.tStop = t  # not accounting for scr refresh
                text_66.tStopRefresh = tThisFlipGlobal  # on global time
                text_66.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_66.stopped')
                # update status
                text_66.status = FINISHED
                text_66.setAutoDraw(False)
        
        # *key_resp_luotuo1* updates
        waitOnFlip = False
        
        # if key_resp_luotuo1 is starting this frame...
        if key_resp_luotuo1.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            key_resp_luotuo1.frameNStart = frameN  # exact frame index
            key_resp_luotuo1.tStart = t  # local t and not account for scr refresh
            key_resp_luotuo1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_luotuo1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_luotuo1.started')
            # update status
            key_resp_luotuo1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_luotuo1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_luotuo1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_luotuo1 is stopping this frame...
        if key_resp_luotuo1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_luotuo1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_luotuo1.tStop = t  # not accounting for scr refresh
                key_resp_luotuo1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_luotuo1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_luotuo1.stopped')
                # update status
                key_resp_luotuo1.status = FINISHED
                key_resp_luotuo1.status = FINISHED
        if key_resp_luotuo1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_luotuo1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_luotuo1_allKeys.extend(theseKeys)
            if len(_key_resp_luotuo1_allKeys):
                key_resp_luotuo1.keys = _key_resp_luotuo1_allKeys[0].name  # just the first key pressed
                key_resp_luotuo1.rt = _key_resp_luotuo1_allKeys[0].rt
                key_resp_luotuo1.duration = _key_resp_luotuo1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialluotuo1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialluotuo1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialluotuo1" ---
    for thisComponent in trialluotuo1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialluotuo1
    trialluotuo1.tStop = globalClock.getTime(format='float')
    trialluotuo1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialluotuo1.stopped', trialluotuo1.tStop)
    # check responses
    if key_resp_luotuo1.keys in ['', [], None]:  # No response was made
        key_resp_luotuo1.keys = None
    thisExp.addData('key_resp_luotuo1.keys',key_resp_luotuo1.keys)
    if key_resp_luotuo1.keys != None:  # we had a response
        thisExp.addData('key_resp_luotuo1.rt', key_resp_luotuo1.rt)
        thisExp.addData('key_resp_luotuo1.duration', key_resp_luotuo1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialluotuo1.maxDurationReached:
        routineTimer.addTime(-trialluotuo1.maxDuration)
    elif trialluotuo1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialfuqin1" ---
    # create an object to store info about Routine trialfuqin1
    trialfuqin1 = data.Routine(
        name='trialfuqin1',
        components=[text_fuqin1, sound_fuqin1, text_67, text_68, key_resp_fuqin1],
    )
    trialfuqin1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_fuqin1.setSound('听力/父亲=专有.wav', secs=3.0, hamming=True)
    sound_fuqin1.setVolume(1.0, log=False)
    sound_fuqin1.seek(0)
    # create starting attributes for key_resp_fuqin1
    key_resp_fuqin1.keys = []
    key_resp_fuqin1.rt = []
    _key_resp_fuqin1_allKeys = []
    # store start times for trialfuqin1
    trialfuqin1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialfuqin1.tStart = globalClock.getTime(format='float')
    trialfuqin1.status = STARTED
    thisExp.addData('trialfuqin1.started', trialfuqin1.tStart)
    trialfuqin1.maxDuration = None
    # keep track of which components have finished
    trialfuqin1Components = trialfuqin1.components
    for thisComponent in trialfuqin1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialfuqin1" ---
    trialfuqin1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_fuqin1* updates
        
        # if text_fuqin1 is starting this frame...
        if text_fuqin1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_fuqin1.frameNStart = frameN  # exact frame index
            text_fuqin1.tStart = t  # local t and not account for scr refresh
            text_fuqin1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_fuqin1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_fuqin1.started')
            # update status
            text_fuqin1.status = STARTED
            text_fuqin1.setAutoDraw(True)
        
        # if text_fuqin1 is active this frame...
        if text_fuqin1.status == STARTED:
            # update params
            pass
        
        # if text_fuqin1 is stopping this frame...
        if text_fuqin1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_fuqin1.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                text_fuqin1.tStop = t  # not accounting for scr refresh
                text_fuqin1.tStopRefresh = tThisFlipGlobal  # on global time
                text_fuqin1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_fuqin1.stopped')
                # update status
                text_fuqin1.status = FINISHED
                text_fuqin1.setAutoDraw(False)
        
        # *sound_fuqin1* updates
        
        # if sound_fuqin1 is starting this frame...
        if sound_fuqin1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_fuqin1.frameNStart = frameN  # exact frame index
            sound_fuqin1.tStart = t  # local t and not account for scr refresh
            sound_fuqin1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_fuqin1.started', tThisFlipGlobal)
            # update status
            sound_fuqin1.status = STARTED
            sound_fuqin1.play(when=win)  # sync with win flip
        
        # if sound_fuqin1 is stopping this frame...
        if sound_fuqin1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_fuqin1.tStartRefresh + 3.0-frameTolerance or sound_fuqin1.isFinished:
                # keep track of stop time/frame for later
                sound_fuqin1.tStop = t  # not accounting for scr refresh
                sound_fuqin1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_fuqin1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_fuqin1.stopped')
                # update status
                sound_fuqin1.status = FINISHED
                sound_fuqin1.stop()
        
        # *text_67* updates
        
        # if text_67 is starting this frame...
        if text_67.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_67.frameNStart = frameN  # exact frame index
            text_67.tStart = t  # local t and not account for scr refresh
            text_67.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_67, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_67.started')
            # update status
            text_67.status = STARTED
            text_67.setAutoDraw(True)
        
        # if text_67 is active this frame...
        if text_67.status == STARTED:
            # update params
            pass
        
        # if text_67 is stopping this frame...
        if text_67.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_67.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_67.tStop = t  # not accounting for scr refresh
                text_67.tStopRefresh = tThisFlipGlobal  # on global time
                text_67.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_67.stopped')
                # update status
                text_67.status = FINISHED
                text_67.setAutoDraw(False)
        
        # *text_68* updates
        
        # if text_68 is starting this frame...
        if text_68.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_68.frameNStart = frameN  # exact frame index
            text_68.tStart = t  # local t and not account for scr refresh
            text_68.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_68, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_68.started')
            # update status
            text_68.status = STARTED
            text_68.setAutoDraw(True)
        
        # if text_68 is active this frame...
        if text_68.status == STARTED:
            # update params
            pass
        
        # if text_68 is stopping this frame...
        if text_68.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_68.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_68.tStop = t  # not accounting for scr refresh
                text_68.tStopRefresh = tThisFlipGlobal  # on global time
                text_68.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_68.stopped')
                # update status
                text_68.status = FINISHED
                text_68.setAutoDraw(False)
        
        # *key_resp_fuqin1* updates
        waitOnFlip = False
        
        # if key_resp_fuqin1 is starting this frame...
        if key_resp_fuqin1.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            key_resp_fuqin1.frameNStart = frameN  # exact frame index
            key_resp_fuqin1.tStart = t  # local t and not account for scr refresh
            key_resp_fuqin1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_fuqin1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_fuqin1.started')
            # update status
            key_resp_fuqin1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_fuqin1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_fuqin1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_fuqin1 is stopping this frame...
        if key_resp_fuqin1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_fuqin1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_fuqin1.tStop = t  # not accounting for scr refresh
                key_resp_fuqin1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_fuqin1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_fuqin1.stopped')
                # update status
                key_resp_fuqin1.status = FINISHED
                key_resp_fuqin1.status = FINISHED
        if key_resp_fuqin1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_fuqin1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_fuqin1_allKeys.extend(theseKeys)
            if len(_key_resp_fuqin1_allKeys):
                key_resp_fuqin1.keys = _key_resp_fuqin1_allKeys[0].name  # just the first key pressed
                key_resp_fuqin1.rt = _key_resp_fuqin1_allKeys[0].rt
                key_resp_fuqin1.duration = _key_resp_fuqin1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_fuqin1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialfuqin1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialfuqin1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialfuqin1" ---
    for thisComponent in trialfuqin1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialfuqin1
    trialfuqin1.tStop = globalClock.getTime(format='float')
    trialfuqin1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialfuqin1.stopped', trialfuqin1.tStop)
    sound_fuqin1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_fuqin1.keys in ['', [], None]:  # No response was made
        key_resp_fuqin1.keys = None
    thisExp.addData('key_resp_fuqin1.keys',key_resp_fuqin1.keys)
    if key_resp_fuqin1.keys != None:  # we had a response
        thisExp.addData('key_resp_fuqin1.rt', key_resp_fuqin1.rt)
        thisExp.addData('key_resp_fuqin1.duration', key_resp_fuqin1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialfuqin1.maxDurationReached:
        routineTimer.addTime(-trialfuqin1.maxDuration)
    elif trialfuqin1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialluotuo0" ---
    # create an object to store info about Routine trialluotuo0
    trialluotuo0 = data.Routine(
        name='trialluotuo0',
        components=[text_luotuo0, text_69, text_70, key_resp_luotuo0],
    )
    trialluotuo0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_luotuo0
    key_resp_luotuo0.keys = []
    key_resp_luotuo0.rt = []
    _key_resp_luotuo0_allKeys = []
    # store start times for trialluotuo0
    trialluotuo0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialluotuo0.tStart = globalClock.getTime(format='float')
    trialluotuo0.status = STARTED
    thisExp.addData('trialluotuo0.started', trialluotuo0.tStart)
    trialluotuo0.maxDuration = None
    # keep track of which components have finished
    trialluotuo0Components = trialluotuo0.components
    for thisComponent in trialluotuo0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialluotuo0" ---
    trialluotuo0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_luotuo0* updates
        
        # if text_luotuo0 is starting this frame...
        if text_luotuo0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_luotuo0.frameNStart = frameN  # exact frame index
            text_luotuo0.tStart = t  # local t and not account for scr refresh
            text_luotuo0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_luotuo0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_luotuo0.started')
            # update status
            text_luotuo0.status = STARTED
            text_luotuo0.setAutoDraw(True)
        
        # if text_luotuo0 is active this frame...
        if text_luotuo0.status == STARTED:
            # update params
            pass
        
        # if text_luotuo0 is stopping this frame...
        if text_luotuo0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_luotuo0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_luotuo0.tStop = t  # not accounting for scr refresh
                text_luotuo0.tStopRefresh = tThisFlipGlobal  # on global time
                text_luotuo0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_luotuo0.stopped')
                # update status
                text_luotuo0.status = FINISHED
                text_luotuo0.setAutoDraw(False)
        
        # *text_69* updates
        
        # if text_69 is starting this frame...
        if text_69.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_69.frameNStart = frameN  # exact frame index
            text_69.tStart = t  # local t and not account for scr refresh
            text_69.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_69, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_69.started')
            # update status
            text_69.status = STARTED
            text_69.setAutoDraw(True)
        
        # if text_69 is active this frame...
        if text_69.status == STARTED:
            # update params
            pass
        
        # if text_69 is stopping this frame...
        if text_69.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_69.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_69.tStop = t  # not accounting for scr refresh
                text_69.tStopRefresh = tThisFlipGlobal  # on global time
                text_69.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_69.stopped')
                # update status
                text_69.status = FINISHED
                text_69.setAutoDraw(False)
        
        # *text_70* updates
        
        # if text_70 is starting this frame...
        if text_70.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_70.frameNStart = frameN  # exact frame index
            text_70.tStart = t  # local t and not account for scr refresh
            text_70.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_70, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_70.started')
            # update status
            text_70.status = STARTED
            text_70.setAutoDraw(True)
        
        # if text_70 is active this frame...
        if text_70.status == STARTED:
            # update params
            pass
        
        # if text_70 is stopping this frame...
        if text_70.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_70.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_70.tStop = t  # not accounting for scr refresh
                text_70.tStopRefresh = tThisFlipGlobal  # on global time
                text_70.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_70.stopped')
                # update status
                text_70.status = FINISHED
                text_70.setAutoDraw(False)
        
        # *key_resp_luotuo0* updates
        waitOnFlip = False
        
        # if key_resp_luotuo0 is starting this frame...
        if key_resp_luotuo0.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            key_resp_luotuo0.frameNStart = frameN  # exact frame index
            key_resp_luotuo0.tStart = t  # local t and not account for scr refresh
            key_resp_luotuo0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_luotuo0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_luotuo0.started')
            # update status
            key_resp_luotuo0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_luotuo0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_luotuo0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_luotuo0 is stopping this frame...
        if key_resp_luotuo0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_luotuo0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_luotuo0.tStop = t  # not accounting for scr refresh
                key_resp_luotuo0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_luotuo0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_luotuo0.stopped')
                # update status
                key_resp_luotuo0.status = FINISHED
                key_resp_luotuo0.status = FINISHED
        if key_resp_luotuo0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_luotuo0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_luotuo0_allKeys.extend(theseKeys)
            if len(_key_resp_luotuo0_allKeys):
                key_resp_luotuo0.keys = _key_resp_luotuo0_allKeys[0].name  # just the first key pressed
                key_resp_luotuo0.rt = _key_resp_luotuo0_allKeys[0].rt
                key_resp_luotuo0.duration = _key_resp_luotuo0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialluotuo0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialluotuo0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialluotuo0" ---
    for thisComponent in trialluotuo0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialluotuo0
    trialluotuo0.tStop = globalClock.getTime(format='float')
    trialluotuo0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialluotuo0.stopped', trialluotuo0.tStop)
    # check responses
    if key_resp_luotuo0.keys in ['', [], None]:  # No response was made
        key_resp_luotuo0.keys = None
    thisExp.addData('key_resp_luotuo0.keys',key_resp_luotuo0.keys)
    if key_resp_luotuo0.keys != None:  # we had a response
        thisExp.addData('key_resp_luotuo0.rt', key_resp_luotuo0.rt)
        thisExp.addData('key_resp_luotuo0.duration', key_resp_luotuo0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialluotuo0.maxDurationReached:
        routineTimer.addTime(-trialluotuo0.maxDuration)
    elif trialluotuo0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialweicheng0" ---
    # create an object to store info about Routine trialweicheng0
    trialweicheng0 = data.Routine(
        name='trialweicheng0',
        components=[text_weicheng0, text_71, text_72, key_resp_weicheng0],
    )
    trialweicheng0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_weicheng0
    key_resp_weicheng0.keys = []
    key_resp_weicheng0.rt = []
    _key_resp_weicheng0_allKeys = []
    # store start times for trialweicheng0
    trialweicheng0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialweicheng0.tStart = globalClock.getTime(format='float')
    trialweicheng0.status = STARTED
    thisExp.addData('trialweicheng0.started', trialweicheng0.tStart)
    trialweicheng0.maxDuration = None
    # keep track of which components have finished
    trialweicheng0Components = trialweicheng0.components
    for thisComponent in trialweicheng0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialweicheng0" ---
    trialweicheng0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_weicheng0* updates
        
        # if text_weicheng0 is starting this frame...
        if text_weicheng0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_weicheng0.frameNStart = frameN  # exact frame index
            text_weicheng0.tStart = t  # local t and not account for scr refresh
            text_weicheng0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_weicheng0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_weicheng0.started')
            # update status
            text_weicheng0.status = STARTED
            text_weicheng0.setAutoDraw(True)
        
        # if text_weicheng0 is active this frame...
        if text_weicheng0.status == STARTED:
            # update params
            pass
        
        # if text_weicheng0 is stopping this frame...
        if text_weicheng0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_weicheng0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_weicheng0.tStop = t  # not accounting for scr refresh
                text_weicheng0.tStopRefresh = tThisFlipGlobal  # on global time
                text_weicheng0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_weicheng0.stopped')
                # update status
                text_weicheng0.status = FINISHED
                text_weicheng0.setAutoDraw(False)
        
        # *text_71* updates
        
        # if text_71 is starting this frame...
        if text_71.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_71.frameNStart = frameN  # exact frame index
            text_71.tStart = t  # local t and not account for scr refresh
            text_71.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_71, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_71.started')
            # update status
            text_71.status = STARTED
            text_71.setAutoDraw(True)
        
        # if text_71 is active this frame...
        if text_71.status == STARTED:
            # update params
            pass
        
        # if text_71 is stopping this frame...
        if text_71.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_71.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_71.tStop = t  # not accounting for scr refresh
                text_71.tStopRefresh = tThisFlipGlobal  # on global time
                text_71.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_71.stopped')
                # update status
                text_71.status = FINISHED
                text_71.setAutoDraw(False)
        
        # *text_72* updates
        
        # if text_72 is starting this frame...
        if text_72.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_72.frameNStart = frameN  # exact frame index
            text_72.tStart = t  # local t and not account for scr refresh
            text_72.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_72, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_72.started')
            # update status
            text_72.status = STARTED
            text_72.setAutoDraw(True)
        
        # if text_72 is active this frame...
        if text_72.status == STARTED:
            # update params
            pass
        
        # if text_72 is stopping this frame...
        if text_72.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_72.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_72.tStop = t  # not accounting for scr refresh
                text_72.tStopRefresh = tThisFlipGlobal  # on global time
                text_72.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_72.stopped')
                # update status
                text_72.status = FINISHED
                text_72.setAutoDraw(False)
        
        # *key_resp_weicheng0* updates
        waitOnFlip = False
        
        # if key_resp_weicheng0 is starting this frame...
        if key_resp_weicheng0.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
            # keep track of start time/frame for later
            key_resp_weicheng0.frameNStart = frameN  # exact frame index
            key_resp_weicheng0.tStart = t  # local t and not account for scr refresh
            key_resp_weicheng0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_weicheng0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_weicheng0.started')
            # update status
            key_resp_weicheng0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_weicheng0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_weicheng0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_weicheng0 is stopping this frame...
        if key_resp_weicheng0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_weicheng0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_weicheng0.tStop = t  # not accounting for scr refresh
                key_resp_weicheng0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_weicheng0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_weicheng0.stopped')
                # update status
                key_resp_weicheng0.status = FINISHED
                key_resp_weicheng0.status = FINISHED
        if key_resp_weicheng0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_weicheng0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_weicheng0_allKeys.extend(theseKeys)
            if len(_key_resp_weicheng0_allKeys):
                key_resp_weicheng0.keys = _key_resp_weicheng0_allKeys[0].name  # just the first key pressed
                key_resp_weicheng0.rt = _key_resp_weicheng0_allKeys[0].rt
                key_resp_weicheng0.duration = _key_resp_weicheng0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialweicheng0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialweicheng0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialweicheng0" ---
    for thisComponent in trialweicheng0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialweicheng0
    trialweicheng0.tStop = globalClock.getTime(format='float')
    trialweicheng0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialweicheng0.stopped', trialweicheng0.tStop)
    # check responses
    if key_resp_weicheng0.keys in ['', [], None]:  # No response was made
        key_resp_weicheng0.keys = None
    thisExp.addData('key_resp_weicheng0.keys',key_resp_weicheng0.keys)
    if key_resp_weicheng0.keys != None:  # we had a response
        thisExp.addData('key_resp_weicheng0.rt', key_resp_weicheng0.rt)
        thisExp.addData('key_resp_weicheng0.duration', key_resp_weicheng0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialweicheng0.maxDurationReached:
        routineTimer.addTime(-trialweicheng0.maxDuration)
    elif trialweicheng0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialchuanghu" ---
    # create an object to store info about Routine trialchuanghu
    trialchuanghu = data.Routine(
        name='trialchuanghu',
        components=[text_chuanghu, sound_chuanghu, text_73, text_74, key_resp_chuanghu],
    )
    trialchuanghu.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_chuanghu.setSound('听力/窗户-单义.wav', secs=3.0, hamming=True)
    sound_chuanghu.setVolume(1.0, log=False)
    sound_chuanghu.seek(0)
    # create starting attributes for key_resp_chuanghu
    key_resp_chuanghu.keys = []
    key_resp_chuanghu.rt = []
    _key_resp_chuanghu_allKeys = []
    # store start times for trialchuanghu
    trialchuanghu.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialchuanghu.tStart = globalClock.getTime(format='float')
    trialchuanghu.status = STARTED
    thisExp.addData('trialchuanghu.started', trialchuanghu.tStart)
    trialchuanghu.maxDuration = None
    # keep track of which components have finished
    trialchuanghuComponents = trialchuanghu.components
    for thisComponent in trialchuanghu.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialchuanghu" ---
    trialchuanghu.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_chuanghu* updates
        
        # if text_chuanghu is starting this frame...
        if text_chuanghu.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_chuanghu.frameNStart = frameN  # exact frame index
            text_chuanghu.tStart = t  # local t and not account for scr refresh
            text_chuanghu.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_chuanghu, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_chuanghu.started')
            # update status
            text_chuanghu.status = STARTED
            text_chuanghu.setAutoDraw(True)
        
        # if text_chuanghu is active this frame...
        if text_chuanghu.status == STARTED:
            # update params
            pass
        
        # if text_chuanghu is stopping this frame...
        if text_chuanghu.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_chuanghu.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_chuanghu.tStop = t  # not accounting for scr refresh
                text_chuanghu.tStopRefresh = tThisFlipGlobal  # on global time
                text_chuanghu.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_chuanghu.stopped')
                # update status
                text_chuanghu.status = FINISHED
                text_chuanghu.setAutoDraw(False)
        
        # *sound_chuanghu* updates
        
        # if sound_chuanghu is starting this frame...
        if sound_chuanghu.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_chuanghu.frameNStart = frameN  # exact frame index
            sound_chuanghu.tStart = t  # local t and not account for scr refresh
            sound_chuanghu.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_chuanghu.started', tThisFlipGlobal)
            # update status
            sound_chuanghu.status = STARTED
            sound_chuanghu.play(when=win)  # sync with win flip
        
        # if sound_chuanghu is stopping this frame...
        if sound_chuanghu.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_chuanghu.tStartRefresh + 3.0-frameTolerance or sound_chuanghu.isFinished:
                # keep track of stop time/frame for later
                sound_chuanghu.tStop = t  # not accounting for scr refresh
                sound_chuanghu.tStopRefresh = tThisFlipGlobal  # on global time
                sound_chuanghu.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_chuanghu.stopped')
                # update status
                sound_chuanghu.status = FINISHED
                sound_chuanghu.stop()
        
        # *text_73* updates
        
        # if text_73 is starting this frame...
        if text_73.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_73.frameNStart = frameN  # exact frame index
            text_73.tStart = t  # local t and not account for scr refresh
            text_73.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_73, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_73.started')
            # update status
            text_73.status = STARTED
            text_73.setAutoDraw(True)
        
        # if text_73 is active this frame...
        if text_73.status == STARTED:
            # update params
            pass
        
        # if text_73 is stopping this frame...
        if text_73.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_73.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_73.tStop = t  # not accounting for scr refresh
                text_73.tStopRefresh = tThisFlipGlobal  # on global time
                text_73.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_73.stopped')
                # update status
                text_73.status = FINISHED
                text_73.setAutoDraw(False)
        
        # *text_74* updates
        
        # if text_74 is starting this frame...
        if text_74.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_74.frameNStart = frameN  # exact frame index
            text_74.tStart = t  # local t and not account for scr refresh
            text_74.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_74, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_74.started')
            # update status
            text_74.status = STARTED
            text_74.setAutoDraw(True)
        
        # if text_74 is active this frame...
        if text_74.status == STARTED:
            # update params
            pass
        
        # if text_74 is stopping this frame...
        if text_74.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_74.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_74.tStop = t  # not accounting for scr refresh
                text_74.tStopRefresh = tThisFlipGlobal  # on global time
                text_74.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_74.stopped')
                # update status
                text_74.status = FINISHED
                text_74.setAutoDraw(False)
        
        # *key_resp_chuanghu* updates
        waitOnFlip = False
        
        # if key_resp_chuanghu is starting this frame...
        if key_resp_chuanghu.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_chuanghu.frameNStart = frameN  # exact frame index
            key_resp_chuanghu.tStart = t  # local t and not account for scr refresh
            key_resp_chuanghu.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_chuanghu, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_chuanghu.started')
            # update status
            key_resp_chuanghu.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_chuanghu.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_chuanghu.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_chuanghu is stopping this frame...
        if key_resp_chuanghu.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_chuanghu.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_chuanghu.tStop = t  # not accounting for scr refresh
                key_resp_chuanghu.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_chuanghu.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_chuanghu.stopped')
                # update status
                key_resp_chuanghu.status = FINISHED
                key_resp_chuanghu.status = FINISHED
        if key_resp_chuanghu.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_chuanghu.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_chuanghu_allKeys.extend(theseKeys)
            if len(_key_resp_chuanghu_allKeys):
                key_resp_chuanghu.keys = _key_resp_chuanghu_allKeys[0].name  # just the first key pressed
                key_resp_chuanghu.rt = _key_resp_chuanghu_allKeys[0].rt
                key_resp_chuanghu.duration = _key_resp_chuanghu_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_chuanghu]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialchuanghu.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialchuanghu.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialchuanghu" ---
    for thisComponent in trialchuanghu.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialchuanghu
    trialchuanghu.tStop = globalClock.getTime(format='float')
    trialchuanghu.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialchuanghu.stopped', trialchuanghu.tStop)
    sound_chuanghu.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_chuanghu.keys in ['', [], None]:  # No response was made
        key_resp_chuanghu.keys = None
    thisExp.addData('key_resp_chuanghu.keys',key_resp_chuanghu.keys)
    if key_resp_chuanghu.keys != None:  # we had a response
        thisExp.addData('key_resp_chuanghu.rt', key_resp_chuanghu.rt)
        thisExp.addData('key_resp_chuanghu.duration', key_resp_chuanghu.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialchuanghu.maxDurationReached:
        routineTimer.addTime(-trialchuanghu.maxDuration)
    elif trialchuanghu.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialdazhong1" ---
    # create an object to store info about Routine trialdazhong1
    trialdazhong1 = data.Routine(
        name='trialdazhong1',
        components=[text_dazhong1, sound_dazhong1, text_75, text_76, key_resp_dazhong1],
    )
    trialdazhong1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_dazhong1.setSound('听力/大众-专有.wav', secs=3.0, hamming=True)
    sound_dazhong1.setVolume(1.0, log=False)
    sound_dazhong1.seek(0)
    # create starting attributes for key_resp_dazhong1
    key_resp_dazhong1.keys = []
    key_resp_dazhong1.rt = []
    _key_resp_dazhong1_allKeys = []
    # store start times for trialdazhong1
    trialdazhong1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialdazhong1.tStart = globalClock.getTime(format='float')
    trialdazhong1.status = STARTED
    thisExp.addData('trialdazhong1.started', trialdazhong1.tStart)
    trialdazhong1.maxDuration = None
    # keep track of which components have finished
    trialdazhong1Components = trialdazhong1.components
    for thisComponent in trialdazhong1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialdazhong1" ---
    trialdazhong1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_dazhong1* updates
        
        # if text_dazhong1 is starting this frame...
        if text_dazhong1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_dazhong1.frameNStart = frameN  # exact frame index
            text_dazhong1.tStart = t  # local t and not account for scr refresh
            text_dazhong1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_dazhong1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_dazhong1.started')
            # update status
            text_dazhong1.status = STARTED
            text_dazhong1.setAutoDraw(True)
        
        # if text_dazhong1 is active this frame...
        if text_dazhong1.status == STARTED:
            # update params
            pass
        
        # if text_dazhong1 is stopping this frame...
        if text_dazhong1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_dazhong1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_dazhong1.tStop = t  # not accounting for scr refresh
                text_dazhong1.tStopRefresh = tThisFlipGlobal  # on global time
                text_dazhong1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_dazhong1.stopped')
                # update status
                text_dazhong1.status = FINISHED
                text_dazhong1.setAutoDraw(False)
        
        # *sound_dazhong1* updates
        
        # if sound_dazhong1 is starting this frame...
        if sound_dazhong1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_dazhong1.frameNStart = frameN  # exact frame index
            sound_dazhong1.tStart = t  # local t and not account for scr refresh
            sound_dazhong1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_dazhong1.started', tThisFlipGlobal)
            # update status
            sound_dazhong1.status = STARTED
            sound_dazhong1.play(when=win)  # sync with win flip
        
        # if sound_dazhong1 is stopping this frame...
        if sound_dazhong1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_dazhong1.tStartRefresh + 3.0-frameTolerance or sound_dazhong1.isFinished:
                # keep track of stop time/frame for later
                sound_dazhong1.tStop = t  # not accounting for scr refresh
                sound_dazhong1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_dazhong1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_dazhong1.stopped')
                # update status
                sound_dazhong1.status = FINISHED
                sound_dazhong1.stop()
        
        # *text_75* updates
        
        # if text_75 is starting this frame...
        if text_75.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_75.frameNStart = frameN  # exact frame index
            text_75.tStart = t  # local t and not account for scr refresh
            text_75.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_75, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_75.started')
            # update status
            text_75.status = STARTED
            text_75.setAutoDraw(True)
        
        # if text_75 is active this frame...
        if text_75.status == STARTED:
            # update params
            pass
        
        # if text_75 is stopping this frame...
        if text_75.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_75.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_75.tStop = t  # not accounting for scr refresh
                text_75.tStopRefresh = tThisFlipGlobal  # on global time
                text_75.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_75.stopped')
                # update status
                text_75.status = FINISHED
                text_75.setAutoDraw(False)
        
        # *text_76* updates
        
        # if text_76 is starting this frame...
        if text_76.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_76.frameNStart = frameN  # exact frame index
            text_76.tStart = t  # local t and not account for scr refresh
            text_76.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_76, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_76.started')
            # update status
            text_76.status = STARTED
            text_76.setAutoDraw(True)
        
        # if text_76 is active this frame...
        if text_76.status == STARTED:
            # update params
            pass
        
        # if text_76 is stopping this frame...
        if text_76.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_76.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_76.tStop = t  # not accounting for scr refresh
                text_76.tStopRefresh = tThisFlipGlobal  # on global time
                text_76.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_76.stopped')
                # update status
                text_76.status = FINISHED
                text_76.setAutoDraw(False)
        
        # *key_resp_dazhong1* updates
        waitOnFlip = False
        
        # if key_resp_dazhong1 is starting this frame...
        if key_resp_dazhong1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_dazhong1.frameNStart = frameN  # exact frame index
            key_resp_dazhong1.tStart = t  # local t and not account for scr refresh
            key_resp_dazhong1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_dazhong1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_dazhong1.started')
            # update status
            key_resp_dazhong1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_dazhong1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_dazhong1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_dazhong1 is stopping this frame...
        if key_resp_dazhong1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_dazhong1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_dazhong1.tStop = t  # not accounting for scr refresh
                key_resp_dazhong1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_dazhong1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_dazhong1.stopped')
                # update status
                key_resp_dazhong1.status = FINISHED
                key_resp_dazhong1.status = FINISHED
        if key_resp_dazhong1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_dazhong1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_dazhong1_allKeys.extend(theseKeys)
            if len(_key_resp_dazhong1_allKeys):
                key_resp_dazhong1.keys = _key_resp_dazhong1_allKeys[0].name  # just the first key pressed
                key_resp_dazhong1.rt = _key_resp_dazhong1_allKeys[0].rt
                key_resp_dazhong1.duration = _key_resp_dazhong1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_dazhong1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialdazhong1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialdazhong1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialdazhong1" ---
    for thisComponent in trialdazhong1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialdazhong1
    trialdazhong1.tStop = globalClock.getTime(format='float')
    trialdazhong1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialdazhong1.stopped', trialdazhong1.tStop)
    sound_dazhong1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_dazhong1.keys in ['', [], None]:  # No response was made
        key_resp_dazhong1.keys = None
    thisExp.addData('key_resp_dazhong1.keys',key_resp_dazhong1.keys)
    if key_resp_dazhong1.keys != None:  # we had a response
        thisExp.addData('key_resp_dazhong1.rt', key_resp_dazhong1.rt)
        thisExp.addData('key_resp_dazhong1.duration', key_resp_dazhong1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialdazhong1.maxDurationReached:
        routineTimer.addTime(-trialdazhong1.maxDuration)
    elif trialdazhong1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialqingfeng0" ---
    # create an object to store info about Routine trialqingfeng0
    trialqingfeng0 = data.Routine(
        name='trialqingfeng0',
        components=[text_qingfeng0, sound_qingfeng0, text_77, text_78, key_resp_qingfeng0],
    )
    trialqingfeng0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_qingfeng0.setSound('听力/清风-普通.wav', secs=3.0, hamming=True)
    sound_qingfeng0.setVolume(1.0, log=False)
    sound_qingfeng0.seek(0)
    # create starting attributes for key_resp_qingfeng0
    key_resp_qingfeng0.keys = []
    key_resp_qingfeng0.rt = []
    _key_resp_qingfeng0_allKeys = []
    # store start times for trialqingfeng0
    trialqingfeng0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialqingfeng0.tStart = globalClock.getTime(format='float')
    trialqingfeng0.status = STARTED
    thisExp.addData('trialqingfeng0.started', trialqingfeng0.tStart)
    trialqingfeng0.maxDuration = None
    # keep track of which components have finished
    trialqingfeng0Components = trialqingfeng0.components
    for thisComponent in trialqingfeng0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialqingfeng0" ---
    trialqingfeng0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_qingfeng0* updates
        
        # if text_qingfeng0 is starting this frame...
        if text_qingfeng0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_qingfeng0.frameNStart = frameN  # exact frame index
            text_qingfeng0.tStart = t  # local t and not account for scr refresh
            text_qingfeng0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_qingfeng0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_qingfeng0.started')
            # update status
            text_qingfeng0.status = STARTED
            text_qingfeng0.setAutoDraw(True)
        
        # if text_qingfeng0 is active this frame...
        if text_qingfeng0.status == STARTED:
            # update params
            pass
        
        # if text_qingfeng0 is stopping this frame...
        if text_qingfeng0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_qingfeng0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_qingfeng0.tStop = t  # not accounting for scr refresh
                text_qingfeng0.tStopRefresh = tThisFlipGlobal  # on global time
                text_qingfeng0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_qingfeng0.stopped')
                # update status
                text_qingfeng0.status = FINISHED
                text_qingfeng0.setAutoDraw(False)
        
        # *sound_qingfeng0* updates
        
        # if sound_qingfeng0 is starting this frame...
        if sound_qingfeng0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_qingfeng0.frameNStart = frameN  # exact frame index
            sound_qingfeng0.tStart = t  # local t and not account for scr refresh
            sound_qingfeng0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_qingfeng0.started', tThisFlipGlobal)
            # update status
            sound_qingfeng0.status = STARTED
            sound_qingfeng0.play(when=win)  # sync with win flip
        
        # if sound_qingfeng0 is stopping this frame...
        if sound_qingfeng0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_qingfeng0.tStartRefresh + 3.0-frameTolerance or sound_qingfeng0.isFinished:
                # keep track of stop time/frame for later
                sound_qingfeng0.tStop = t  # not accounting for scr refresh
                sound_qingfeng0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_qingfeng0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_qingfeng0.stopped')
                # update status
                sound_qingfeng0.status = FINISHED
                sound_qingfeng0.stop()
        
        # *text_77* updates
        
        # if text_77 is starting this frame...
        if text_77.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_77.frameNStart = frameN  # exact frame index
            text_77.tStart = t  # local t and not account for scr refresh
            text_77.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_77, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_77.started')
            # update status
            text_77.status = STARTED
            text_77.setAutoDraw(True)
        
        # if text_77 is active this frame...
        if text_77.status == STARTED:
            # update params
            pass
        
        # if text_77 is stopping this frame...
        if text_77.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_77.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_77.tStop = t  # not accounting for scr refresh
                text_77.tStopRefresh = tThisFlipGlobal  # on global time
                text_77.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_77.stopped')
                # update status
                text_77.status = FINISHED
                text_77.setAutoDraw(False)
        
        # *text_78* updates
        
        # if text_78 is starting this frame...
        if text_78.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_78.frameNStart = frameN  # exact frame index
            text_78.tStart = t  # local t and not account for scr refresh
            text_78.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_78, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_78.started')
            # update status
            text_78.status = STARTED
            text_78.setAutoDraw(True)
        
        # if text_78 is active this frame...
        if text_78.status == STARTED:
            # update params
            pass
        
        # if text_78 is stopping this frame...
        if text_78.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_78.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_78.tStop = t  # not accounting for scr refresh
                text_78.tStopRefresh = tThisFlipGlobal  # on global time
                text_78.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_78.stopped')
                # update status
                text_78.status = FINISHED
                text_78.setAutoDraw(False)
        
        # *key_resp_qingfeng0* updates
        waitOnFlip = False
        
        # if key_resp_qingfeng0 is starting this frame...
        if key_resp_qingfeng0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_qingfeng0.frameNStart = frameN  # exact frame index
            key_resp_qingfeng0.tStart = t  # local t and not account for scr refresh
            key_resp_qingfeng0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_qingfeng0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_qingfeng0.started')
            # update status
            key_resp_qingfeng0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_qingfeng0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_qingfeng0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_qingfeng0 is stopping this frame...
        if key_resp_qingfeng0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_qingfeng0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_qingfeng0.tStop = t  # not accounting for scr refresh
                key_resp_qingfeng0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_qingfeng0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_qingfeng0.stopped')
                # update status
                key_resp_qingfeng0.status = FINISHED
                key_resp_qingfeng0.status = FINISHED
        if key_resp_qingfeng0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_qingfeng0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_qingfeng0_allKeys.extend(theseKeys)
            if len(_key_resp_qingfeng0_allKeys):
                key_resp_qingfeng0.keys = _key_resp_qingfeng0_allKeys[0].name  # just the first key pressed
                key_resp_qingfeng0.rt = _key_resp_qingfeng0_allKeys[0].rt
                key_resp_qingfeng0.duration = _key_resp_qingfeng0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_qingfeng0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialqingfeng0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialqingfeng0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialqingfeng0" ---
    for thisComponent in trialqingfeng0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialqingfeng0
    trialqingfeng0.tStop = globalClock.getTime(format='float')
    trialqingfeng0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialqingfeng0.stopped', trialqingfeng0.tStop)
    sound_qingfeng0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_qingfeng0.keys in ['', [], None]:  # No response was made
        key_resp_qingfeng0.keys = None
    thisExp.addData('key_resp_qingfeng0.keys',key_resp_qingfeng0.keys)
    if key_resp_qingfeng0.keys != None:  # we had a response
        thisExp.addData('key_resp_qingfeng0.rt', key_resp_qingfeng0.rt)
        thisExp.addData('key_resp_qingfeng0.duration', key_resp_qingfeng0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialqingfeng0.maxDurationReached:
        routineTimer.addTime(-trialqingfeng0.maxDuration)
    elif trialqingfeng0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialmutou" ---
    # create an object to store info about Routine trialmutou
    trialmutou = data.Routine(
        name='trialmutou',
        components=[text_mutou, sound_mutou, text_79, text_80, key_resp_mutou],
    )
    trialmutou.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_mutou.setSound('A', secs=3.0, hamming=True)
    sound_mutou.setVolume(1.0, log=False)
    sound_mutou.seek(0)
    # create starting attributes for key_resp_mutou
    key_resp_mutou.keys = []
    key_resp_mutou.rt = []
    _key_resp_mutou_allKeys = []
    # store start times for trialmutou
    trialmutou.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialmutou.tStart = globalClock.getTime(format='float')
    trialmutou.status = STARTED
    thisExp.addData('trialmutou.started', trialmutou.tStart)
    trialmutou.maxDuration = None
    # keep track of which components have finished
    trialmutouComponents = trialmutou.components
    for thisComponent in trialmutou.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialmutou" ---
    trialmutou.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_mutou* updates
        
        # if text_mutou is starting this frame...
        if text_mutou.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_mutou.frameNStart = frameN  # exact frame index
            text_mutou.tStart = t  # local t and not account for scr refresh
            text_mutou.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_mutou, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_mutou.started')
            # update status
            text_mutou.status = STARTED
            text_mutou.setAutoDraw(True)
        
        # if text_mutou is active this frame...
        if text_mutou.status == STARTED:
            # update params
            pass
        
        # if text_mutou is stopping this frame...
        if text_mutou.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_mutou.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_mutou.tStop = t  # not accounting for scr refresh
                text_mutou.tStopRefresh = tThisFlipGlobal  # on global time
                text_mutou.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_mutou.stopped')
                # update status
                text_mutou.status = FINISHED
                text_mutou.setAutoDraw(False)
        
        # *sound_mutou* updates
        
        # if sound_mutou is starting this frame...
        if sound_mutou.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_mutou.frameNStart = frameN  # exact frame index
            sound_mutou.tStart = t  # local t and not account for scr refresh
            sound_mutou.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_mutou.started', tThisFlipGlobal)
            # update status
            sound_mutou.status = STARTED
            sound_mutou.play(when=win)  # sync with win flip
        
        # if sound_mutou is stopping this frame...
        if sound_mutou.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_mutou.tStartRefresh + 3.0-frameTolerance or sound_mutou.isFinished:
                # keep track of stop time/frame for later
                sound_mutou.tStop = t  # not accounting for scr refresh
                sound_mutou.tStopRefresh = tThisFlipGlobal  # on global time
                sound_mutou.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_mutou.stopped')
                # update status
                sound_mutou.status = FINISHED
                sound_mutou.stop()
        
        # *text_79* updates
        
        # if text_79 is starting this frame...
        if text_79.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_79.frameNStart = frameN  # exact frame index
            text_79.tStart = t  # local t and not account for scr refresh
            text_79.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_79, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_79.started')
            # update status
            text_79.status = STARTED
            text_79.setAutoDraw(True)
        
        # if text_79 is active this frame...
        if text_79.status == STARTED:
            # update params
            pass
        
        # if text_79 is stopping this frame...
        if text_79.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_79.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_79.tStop = t  # not accounting for scr refresh
                text_79.tStopRefresh = tThisFlipGlobal  # on global time
                text_79.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_79.stopped')
                # update status
                text_79.status = FINISHED
                text_79.setAutoDraw(False)
        
        # *text_80* updates
        
        # if text_80 is starting this frame...
        if text_80.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_80.frameNStart = frameN  # exact frame index
            text_80.tStart = t  # local t and not account for scr refresh
            text_80.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_80, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_80.started')
            # update status
            text_80.status = STARTED
            text_80.setAutoDraw(True)
        
        # if text_80 is active this frame...
        if text_80.status == STARTED:
            # update params
            pass
        
        # if text_80 is stopping this frame...
        if text_80.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_80.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_80.tStop = t  # not accounting for scr refresh
                text_80.tStopRefresh = tThisFlipGlobal  # on global time
                text_80.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_80.stopped')
                # update status
                text_80.status = FINISHED
                text_80.setAutoDraw(False)
        
        # *key_resp_mutou* updates
        waitOnFlip = False
        
        # if key_resp_mutou is starting this frame...
        if key_resp_mutou.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_mutou.frameNStart = frameN  # exact frame index
            key_resp_mutou.tStart = t  # local t and not account for scr refresh
            key_resp_mutou.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_mutou, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_mutou.started')
            # update status
            key_resp_mutou.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_mutou.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_mutou.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_mutou is stopping this frame...
        if key_resp_mutou.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_mutou.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_mutou.tStop = t  # not accounting for scr refresh
                key_resp_mutou.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_mutou.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_mutou.stopped')
                # update status
                key_resp_mutou.status = FINISHED
                key_resp_mutou.status = FINISHED
        if key_resp_mutou.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_mutou.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_mutou_allKeys.extend(theseKeys)
            if len(_key_resp_mutou_allKeys):
                key_resp_mutou.keys = _key_resp_mutou_allKeys[0].name  # just the first key pressed
                key_resp_mutou.rt = _key_resp_mutou_allKeys[0].rt
                key_resp_mutou.duration = _key_resp_mutou_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_mutou]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialmutou.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialmutou.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialmutou" ---
    for thisComponent in trialmutou.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialmutou
    trialmutou.tStop = globalClock.getTime(format='float')
    trialmutou.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialmutou.stopped', trialmutou.tStop)
    sound_mutou.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_mutou.keys in ['', [], None]:  # No response was made
        key_resp_mutou.keys = None
    thisExp.addData('key_resp_mutou.keys',key_resp_mutou.keys)
    if key_resp_mutou.keys != None:  # we had a response
        thisExp.addData('key_resp_mutou.rt', key_resp_mutou.rt)
        thisExp.addData('key_resp_mutou.duration', key_resp_mutou.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialmutou.maxDurationReached:
        routineTimer.addTime(-trialmutou.maxDuration)
    elif trialmutou.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialfangjian" ---
    # create an object to store info about Routine trialfangjian
    trialfangjian = data.Routine(
        name='trialfangjian',
        components=[text_fangjian, sound_fangjian, text_81, text_82, key_resp_fangjian],
    )
    trialfangjian.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_fangjian.setSound('听力/房间-单义.wav', secs=3.0, hamming=True)
    sound_fangjian.setVolume(1.0, log=False)
    sound_fangjian.seek(0)
    # create starting attributes for key_resp_fangjian
    key_resp_fangjian.keys = []
    key_resp_fangjian.rt = []
    _key_resp_fangjian_allKeys = []
    # store start times for trialfangjian
    trialfangjian.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialfangjian.tStart = globalClock.getTime(format='float')
    trialfangjian.status = STARTED
    thisExp.addData('trialfangjian.started', trialfangjian.tStart)
    trialfangjian.maxDuration = None
    # keep track of which components have finished
    trialfangjianComponents = trialfangjian.components
    for thisComponent in trialfangjian.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialfangjian" ---
    trialfangjian.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_fangjian* updates
        
        # if text_fangjian is starting this frame...
        if text_fangjian.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_fangjian.frameNStart = frameN  # exact frame index
            text_fangjian.tStart = t  # local t and not account for scr refresh
            text_fangjian.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_fangjian, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_fangjian.started')
            # update status
            text_fangjian.status = STARTED
            text_fangjian.setAutoDraw(True)
        
        # if text_fangjian is active this frame...
        if text_fangjian.status == STARTED:
            # update params
            pass
        
        # if text_fangjian is stopping this frame...
        if text_fangjian.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_fangjian.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_fangjian.tStop = t  # not accounting for scr refresh
                text_fangjian.tStopRefresh = tThisFlipGlobal  # on global time
                text_fangjian.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_fangjian.stopped')
                # update status
                text_fangjian.status = FINISHED
                text_fangjian.setAutoDraw(False)
        
        # *sound_fangjian* updates
        
        # if sound_fangjian is starting this frame...
        if sound_fangjian.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_fangjian.frameNStart = frameN  # exact frame index
            sound_fangjian.tStart = t  # local t and not account for scr refresh
            sound_fangjian.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_fangjian.started', tThisFlipGlobal)
            # update status
            sound_fangjian.status = STARTED
            sound_fangjian.play(when=win)  # sync with win flip
        
        # if sound_fangjian is stopping this frame...
        if sound_fangjian.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_fangjian.tStartRefresh + 3.0-frameTolerance or sound_fangjian.isFinished:
                # keep track of stop time/frame for later
                sound_fangjian.tStop = t  # not accounting for scr refresh
                sound_fangjian.tStopRefresh = tThisFlipGlobal  # on global time
                sound_fangjian.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_fangjian.stopped')
                # update status
                sound_fangjian.status = FINISHED
                sound_fangjian.stop()
        
        # *text_81* updates
        
        # if text_81 is starting this frame...
        if text_81.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_81.frameNStart = frameN  # exact frame index
            text_81.tStart = t  # local t and not account for scr refresh
            text_81.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_81, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_81.started')
            # update status
            text_81.status = STARTED
            text_81.setAutoDraw(True)
        
        # if text_81 is active this frame...
        if text_81.status == STARTED:
            # update params
            pass
        
        # if text_81 is stopping this frame...
        if text_81.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_81.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_81.tStop = t  # not accounting for scr refresh
                text_81.tStopRefresh = tThisFlipGlobal  # on global time
                text_81.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_81.stopped')
                # update status
                text_81.status = FINISHED
                text_81.setAutoDraw(False)
        
        # *text_82* updates
        
        # if text_82 is starting this frame...
        if text_82.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_82.frameNStart = frameN  # exact frame index
            text_82.tStart = t  # local t and not account for scr refresh
            text_82.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_82, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_82.started')
            # update status
            text_82.status = STARTED
            text_82.setAutoDraw(True)
        
        # if text_82 is active this frame...
        if text_82.status == STARTED:
            # update params
            pass
        
        # if text_82 is stopping this frame...
        if text_82.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_82.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_82.tStop = t  # not accounting for scr refresh
                text_82.tStopRefresh = tThisFlipGlobal  # on global time
                text_82.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_82.stopped')
                # update status
                text_82.status = FINISHED
                text_82.setAutoDraw(False)
        
        # *key_resp_fangjian* updates
        waitOnFlip = False
        
        # if key_resp_fangjian is starting this frame...
        if key_resp_fangjian.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_fangjian.frameNStart = frameN  # exact frame index
            key_resp_fangjian.tStart = t  # local t and not account for scr refresh
            key_resp_fangjian.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_fangjian, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_fangjian.started')
            # update status
            key_resp_fangjian.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_fangjian.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_fangjian.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_fangjian is stopping this frame...
        if key_resp_fangjian.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_fangjian.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_fangjian.tStop = t  # not accounting for scr refresh
                key_resp_fangjian.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_fangjian.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_fangjian.stopped')
                # update status
                key_resp_fangjian.status = FINISHED
                key_resp_fangjian.status = FINISHED
        if key_resp_fangjian.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_fangjian.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_fangjian_allKeys.extend(theseKeys)
            if len(_key_resp_fangjian_allKeys):
                key_resp_fangjian.keys = _key_resp_fangjian_allKeys[0].name  # just the first key pressed
                key_resp_fangjian.rt = _key_resp_fangjian_allKeys[0].rt
                key_resp_fangjian.duration = _key_resp_fangjian_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_fangjian]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialfangjian.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialfangjian.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialfangjian" ---
    for thisComponent in trialfangjian.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialfangjian
    trialfangjian.tStop = globalClock.getTime(format='float')
    trialfangjian.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialfangjian.stopped', trialfangjian.tStop)
    sound_fangjian.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_fangjian.keys in ['', [], None]:  # No response was made
        key_resp_fangjian.keys = None
    thisExp.addData('key_resp_fangjian.keys',key_resp_fangjian.keys)
    if key_resp_fangjian.keys != None:  # we had a response
        thisExp.addData('key_resp_fangjian.rt', key_resp_fangjian.rt)
        thisExp.addData('key_resp_fangjian.duration', key_resp_fangjian.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialfangjian.maxDurationReached:
        routineTimer.addTime(-trialfangjian.maxDuration)
    elif trialfangjian.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialhuahai1" ---
    # create an object to store info about Routine trialhuahai1
    trialhuahai1 = data.Routine(
        name='trialhuahai1',
        components=[text_huahai1, sound_huahi1, text_83, text_84, key_resp_huahai1],
    )
    trialhuahai1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_huahi1.setSound('听力/花海-专有.wav', secs=3.0, hamming=True)
    sound_huahi1.setVolume(1.0, log=False)
    sound_huahi1.seek(0)
    # create starting attributes for key_resp_huahai1
    key_resp_huahai1.keys = []
    key_resp_huahai1.rt = []
    _key_resp_huahai1_allKeys = []
    # store start times for trialhuahai1
    trialhuahai1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialhuahai1.tStart = globalClock.getTime(format='float')
    trialhuahai1.status = STARTED
    thisExp.addData('trialhuahai1.started', trialhuahai1.tStart)
    trialhuahai1.maxDuration = None
    # keep track of which components have finished
    trialhuahai1Components = trialhuahai1.components
    for thisComponent in trialhuahai1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialhuahai1" ---
    trialhuahai1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_huahai1* updates
        
        # if text_huahai1 is starting this frame...
        if text_huahai1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_huahai1.frameNStart = frameN  # exact frame index
            text_huahai1.tStart = t  # local t and not account for scr refresh
            text_huahai1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_huahai1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_huahai1.started')
            # update status
            text_huahai1.status = STARTED
            text_huahai1.setAutoDraw(True)
        
        # if text_huahai1 is active this frame...
        if text_huahai1.status == STARTED:
            # update params
            pass
        
        # if text_huahai1 is stopping this frame...
        if text_huahai1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_huahai1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_huahai1.tStop = t  # not accounting for scr refresh
                text_huahai1.tStopRefresh = tThisFlipGlobal  # on global time
                text_huahai1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_huahai1.stopped')
                # update status
                text_huahai1.status = FINISHED
                text_huahai1.setAutoDraw(False)
        
        # *sound_huahi1* updates
        
        # if sound_huahi1 is starting this frame...
        if sound_huahi1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_huahi1.frameNStart = frameN  # exact frame index
            sound_huahi1.tStart = t  # local t and not account for scr refresh
            sound_huahi1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_huahi1.started', tThisFlipGlobal)
            # update status
            sound_huahi1.status = STARTED
            sound_huahi1.play(when=win)  # sync with win flip
        
        # if sound_huahi1 is stopping this frame...
        if sound_huahi1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_huahi1.tStartRefresh + 3.0-frameTolerance or sound_huahi1.isFinished:
                # keep track of stop time/frame for later
                sound_huahi1.tStop = t  # not accounting for scr refresh
                sound_huahi1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_huahi1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_huahi1.stopped')
                # update status
                sound_huahi1.status = FINISHED
                sound_huahi1.stop()
        
        # *text_83* updates
        
        # if text_83 is starting this frame...
        if text_83.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_83.frameNStart = frameN  # exact frame index
            text_83.tStart = t  # local t and not account for scr refresh
            text_83.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_83, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_83.started')
            # update status
            text_83.status = STARTED
            text_83.setAutoDraw(True)
        
        # if text_83 is active this frame...
        if text_83.status == STARTED:
            # update params
            pass
        
        # if text_83 is stopping this frame...
        if text_83.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_83.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_83.tStop = t  # not accounting for scr refresh
                text_83.tStopRefresh = tThisFlipGlobal  # on global time
                text_83.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_83.stopped')
                # update status
                text_83.status = FINISHED
                text_83.setAutoDraw(False)
        
        # *text_84* updates
        
        # if text_84 is starting this frame...
        if text_84.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_84.frameNStart = frameN  # exact frame index
            text_84.tStart = t  # local t and not account for scr refresh
            text_84.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_84, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_84.started')
            # update status
            text_84.status = STARTED
            text_84.setAutoDraw(True)
        
        # if text_84 is active this frame...
        if text_84.status == STARTED:
            # update params
            pass
        
        # if text_84 is stopping this frame...
        if text_84.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_84.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_84.tStop = t  # not accounting for scr refresh
                text_84.tStopRefresh = tThisFlipGlobal  # on global time
                text_84.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_84.stopped')
                # update status
                text_84.status = FINISHED
                text_84.setAutoDraw(False)
        
        # *key_resp_huahai1* updates
        waitOnFlip = False
        
        # if key_resp_huahai1 is starting this frame...
        if key_resp_huahai1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_huahai1.frameNStart = frameN  # exact frame index
            key_resp_huahai1.tStart = t  # local t and not account for scr refresh
            key_resp_huahai1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_huahai1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_huahai1.started')
            # update status
            key_resp_huahai1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_huahai1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_huahai1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_huahai1 is stopping this frame...
        if key_resp_huahai1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_huahai1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_huahai1.tStop = t  # not accounting for scr refresh
                key_resp_huahai1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_huahai1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_huahai1.stopped')
                # update status
                key_resp_huahai1.status = FINISHED
                key_resp_huahai1.status = FINISHED
        if key_resp_huahai1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_huahai1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_huahai1_allKeys.extend(theseKeys)
            if len(_key_resp_huahai1_allKeys):
                key_resp_huahai1.keys = _key_resp_huahai1_allKeys[0].name  # just the first key pressed
                key_resp_huahai1.rt = _key_resp_huahai1_allKeys[0].rt
                key_resp_huahai1.duration = _key_resp_huahai1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_huahi1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialhuahai1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialhuahai1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialhuahai1" ---
    for thisComponent in trialhuahai1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialhuahai1
    trialhuahai1.tStop = globalClock.getTime(format='float')
    trialhuahai1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialhuahai1.stopped', trialhuahai1.tStop)
    sound_huahi1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_huahai1.keys in ['', [], None]:  # No response was made
        key_resp_huahai1.keys = None
    thisExp.addData('key_resp_huahai1.keys',key_resp_huahai1.keys)
    if key_resp_huahai1.keys != None:  # we had a response
        thisExp.addData('key_resp_huahai1.rt', key_resp_huahai1.rt)
        thisExp.addData('key_resp_huahai1.duration', key_resp_huahai1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialhuahai1.maxDurationReached:
        routineTimer.addTime(-trialhuahai1.maxDuration)
    elif trialhuahai1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "triallixiang0" ---
    # create an object to store info about Routine triallixiang0
    triallixiang0 = data.Routine(
        name='triallixiang0',
        components=[text_lixiang0, sound_lixiang0, text_85, text_86, key_resp_lixiang0],
    )
    triallixiang0.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_lixiang0.setSound('听力/理想-普通.wav', secs=3.0, hamming=True)
    sound_lixiang0.setVolume(1.0, log=False)
    sound_lixiang0.seek(0)
    # create starting attributes for key_resp_lixiang0
    key_resp_lixiang0.keys = []
    key_resp_lixiang0.rt = []
    _key_resp_lixiang0_allKeys = []
    # store start times for triallixiang0
    triallixiang0.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    triallixiang0.tStart = globalClock.getTime(format='float')
    triallixiang0.status = STARTED
    thisExp.addData('triallixiang0.started', triallixiang0.tStart)
    triallixiang0.maxDuration = None
    # keep track of which components have finished
    triallixiang0Components = triallixiang0.components
    for thisComponent in triallixiang0.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "triallixiang0" ---
    triallixiang0.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_lixiang0* updates
        
        # if text_lixiang0 is starting this frame...
        if text_lixiang0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_lixiang0.frameNStart = frameN  # exact frame index
            text_lixiang0.tStart = t  # local t and not account for scr refresh
            text_lixiang0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_lixiang0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_lixiang0.started')
            # update status
            text_lixiang0.status = STARTED
            text_lixiang0.setAutoDraw(True)
        
        # if text_lixiang0 is active this frame...
        if text_lixiang0.status == STARTED:
            # update params
            pass
        
        # if text_lixiang0 is stopping this frame...
        if text_lixiang0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_lixiang0.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_lixiang0.tStop = t  # not accounting for scr refresh
                text_lixiang0.tStopRefresh = tThisFlipGlobal  # on global time
                text_lixiang0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_lixiang0.stopped')
                # update status
                text_lixiang0.status = FINISHED
                text_lixiang0.setAutoDraw(False)
        
        # *sound_lixiang0* updates
        
        # if sound_lixiang0 is starting this frame...
        if sound_lixiang0.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_lixiang0.frameNStart = frameN  # exact frame index
            sound_lixiang0.tStart = t  # local t and not account for scr refresh
            sound_lixiang0.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_lixiang0.started', tThisFlipGlobal)
            # update status
            sound_lixiang0.status = STARTED
            sound_lixiang0.play(when=win)  # sync with win flip
        
        # if sound_lixiang0 is stopping this frame...
        if sound_lixiang0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_lixiang0.tStartRefresh + 3.0-frameTolerance or sound_lixiang0.isFinished:
                # keep track of stop time/frame for later
                sound_lixiang0.tStop = t  # not accounting for scr refresh
                sound_lixiang0.tStopRefresh = tThisFlipGlobal  # on global time
                sound_lixiang0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_lixiang0.stopped')
                # update status
                sound_lixiang0.status = FINISHED
                sound_lixiang0.stop()
        
        # *text_85* updates
        
        # if text_85 is starting this frame...
        if text_85.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_85.frameNStart = frameN  # exact frame index
            text_85.tStart = t  # local t and not account for scr refresh
            text_85.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_85, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_85.started')
            # update status
            text_85.status = STARTED
            text_85.setAutoDraw(True)
        
        # if text_85 is active this frame...
        if text_85.status == STARTED:
            # update params
            pass
        
        # if text_85 is stopping this frame...
        if text_85.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_85.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_85.tStop = t  # not accounting for scr refresh
                text_85.tStopRefresh = tThisFlipGlobal  # on global time
                text_85.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_85.stopped')
                # update status
                text_85.status = FINISHED
                text_85.setAutoDraw(False)
        
        # *text_86* updates
        
        # if text_86 is starting this frame...
        if text_86.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_86.frameNStart = frameN  # exact frame index
            text_86.tStart = t  # local t and not account for scr refresh
            text_86.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_86, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_86.started')
            # update status
            text_86.status = STARTED
            text_86.setAutoDraw(True)
        
        # if text_86 is active this frame...
        if text_86.status == STARTED:
            # update params
            pass
        
        # if text_86 is stopping this frame...
        if text_86.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_86.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_86.tStop = t  # not accounting for scr refresh
                text_86.tStopRefresh = tThisFlipGlobal  # on global time
                text_86.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_86.stopped')
                # update status
                text_86.status = FINISHED
                text_86.setAutoDraw(False)
        
        # *key_resp_lixiang0* updates
        waitOnFlip = False
        
        # if key_resp_lixiang0 is starting this frame...
        if key_resp_lixiang0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_lixiang0.frameNStart = frameN  # exact frame index
            key_resp_lixiang0.tStart = t  # local t and not account for scr refresh
            key_resp_lixiang0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_lixiang0, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_lixiang0.started')
            # update status
            key_resp_lixiang0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_lixiang0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_lixiang0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_lixiang0 is stopping this frame...
        if key_resp_lixiang0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_lixiang0.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_lixiang0.tStop = t  # not accounting for scr refresh
                key_resp_lixiang0.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_lixiang0.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_lixiang0.stopped')
                # update status
                key_resp_lixiang0.status = FINISHED
                key_resp_lixiang0.status = FINISHED
        if key_resp_lixiang0.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_lixiang0.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_lixiang0_allKeys.extend(theseKeys)
            if len(_key_resp_lixiang0_allKeys):
                key_resp_lixiang0.keys = _key_resp_lixiang0_allKeys[0].name  # just the first key pressed
                key_resp_lixiang0.rt = _key_resp_lixiang0_allKeys[0].rt
                key_resp_lixiang0.duration = _key_resp_lixiang0_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_lixiang0]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            triallixiang0.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in triallixiang0.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "triallixiang0" ---
    for thisComponent in triallixiang0.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for triallixiang0
    triallixiang0.tStop = globalClock.getTime(format='float')
    triallixiang0.tStopRefresh = tThisFlipGlobal
    thisExp.addData('triallixiang0.stopped', triallixiang0.tStop)
    sound_lixiang0.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_lixiang0.keys in ['', [], None]:  # No response was made
        key_resp_lixiang0.keys = None
    thisExp.addData('key_resp_lixiang0.keys',key_resp_lixiang0.keys)
    if key_resp_lixiang0.keys != None:  # we had a response
        thisExp.addData('key_resp_lixiang0.rt', key_resp_lixiang0.rt)
        thisExp.addData('key_resp_lixiang0.duration', key_resp_lixiang0.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if triallixiang0.maxDurationReached:
        routineTimer.addTime(-triallixiang0.maxDuration)
    elif triallixiang0.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialheimei1" ---
    # create an object to store info about Routine trialheimei1
    trialheimei1 = data.Routine(
        name='trialheimei1',
        components=[text_heimei1, text_87, text_88, key_resp_heimei1],
    )
    trialheimei1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_heimei1
    key_resp_heimei1.keys = []
    key_resp_heimei1.rt = []
    _key_resp_heimei1_allKeys = []
    # store start times for trialheimei1
    trialheimei1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialheimei1.tStart = globalClock.getTime(format='float')
    trialheimei1.status = STARTED
    thisExp.addData('trialheimei1.started', trialheimei1.tStart)
    trialheimei1.maxDuration = None
    # keep track of which components have finished
    trialheimei1Components = trialheimei1.components
    for thisComponent in trialheimei1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialheimei1" ---
    trialheimei1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_heimei1* updates
        
        # if text_heimei1 is starting this frame...
        if text_heimei1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_heimei1.frameNStart = frameN  # exact frame index
            text_heimei1.tStart = t  # local t and not account for scr refresh
            text_heimei1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_heimei1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_heimei1.started')
            # update status
            text_heimei1.status = STARTED
            text_heimei1.setAutoDraw(True)
        
        # if text_heimei1 is active this frame...
        if text_heimei1.status == STARTED:
            # update params
            pass
        
        # if text_heimei1 is stopping this frame...
        if text_heimei1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_heimei1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_heimei1.tStop = t  # not accounting for scr refresh
                text_heimei1.tStopRefresh = tThisFlipGlobal  # on global time
                text_heimei1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_heimei1.stopped')
                # update status
                text_heimei1.status = FINISHED
                text_heimei1.setAutoDraw(False)
        
        # *text_87* updates
        
        # if text_87 is starting this frame...
        if text_87.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_87.frameNStart = frameN  # exact frame index
            text_87.tStart = t  # local t and not account for scr refresh
            text_87.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_87, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_87.started')
            # update status
            text_87.status = STARTED
            text_87.setAutoDraw(True)
        
        # if text_87 is active this frame...
        if text_87.status == STARTED:
            # update params
            pass
        
        # if text_87 is stopping this frame...
        if text_87.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_87.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_87.tStop = t  # not accounting for scr refresh
                text_87.tStopRefresh = tThisFlipGlobal  # on global time
                text_87.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_87.stopped')
                # update status
                text_87.status = FINISHED
                text_87.setAutoDraw(False)
        
        # *text_88* updates
        
        # if text_88 is starting this frame...
        if text_88.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_88.frameNStart = frameN  # exact frame index
            text_88.tStart = t  # local t and not account for scr refresh
            text_88.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_88, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_88.started')
            # update status
            text_88.status = STARTED
            text_88.setAutoDraw(True)
        
        # if text_88 is active this frame...
        if text_88.status == STARTED:
            # update params
            pass
        
        # if text_88 is stopping this frame...
        if text_88.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_88.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_88.tStop = t  # not accounting for scr refresh
                text_88.tStopRefresh = tThisFlipGlobal  # on global time
                text_88.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_88.stopped')
                # update status
                text_88.status = FINISHED
                text_88.setAutoDraw(False)
        
        # *key_resp_heimei1* updates
        waitOnFlip = False
        
        # if key_resp_heimei1 is starting this frame...
        if key_resp_heimei1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_heimei1.frameNStart = frameN  # exact frame index
            key_resp_heimei1.tStart = t  # local t and not account for scr refresh
            key_resp_heimei1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_heimei1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_heimei1.started')
            # update status
            key_resp_heimei1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_heimei1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_heimei1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_heimei1 is stopping this frame...
        if key_resp_heimei1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_heimei1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_heimei1.tStop = t  # not accounting for scr refresh
                key_resp_heimei1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_heimei1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_heimei1.stopped')
                # update status
                key_resp_heimei1.status = FINISHED
                key_resp_heimei1.status = FINISHED
        if key_resp_heimei1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_heimei1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_heimei1_allKeys.extend(theseKeys)
            if len(_key_resp_heimei1_allKeys):
                key_resp_heimei1.keys = _key_resp_heimei1_allKeys[0].name  # just the first key pressed
                key_resp_heimei1.rt = _key_resp_heimei1_allKeys[0].rt
                key_resp_heimei1.duration = _key_resp_heimei1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialheimei1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialheimei1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialheimei1" ---
    for thisComponent in trialheimei1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialheimei1
    trialheimei1.tStop = globalClock.getTime(format='float')
    trialheimei1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialheimei1.stopped', trialheimei1.tStop)
    # check responses
    if key_resp_heimei1.keys in ['', [], None]:  # No response was made
        key_resp_heimei1.keys = None
    thisExp.addData('key_resp_heimei1.keys',key_resp_heimei1.keys)
    if key_resp_heimei1.keys != None:  # we had a response
        thisExp.addData('key_resp_heimei1.rt', key_resp_heimei1.rt)
        thisExp.addData('key_resp_heimei1.duration', key_resp_heimei1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialheimei1.maxDurationReached:
        routineTimer.addTime(-trialheimei1.maxDuration)
    elif trialheimei1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "trialyintian1" ---
    # create an object to store info about Routine trialyintian1
    trialyintian1 = data.Routine(
        name='trialyintian1',
        components=[text_yintian1, sound_yintian1, text_89, text_90, key_resp_yintian1],
    )
    trialyintian1.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    sound_yintian1.setSound('听力/阴天-专有.wav', secs=3.0, hamming=True)
    sound_yintian1.setVolume(1.0, log=False)
    sound_yintian1.seek(0)
    # create starting attributes for key_resp_yintian1
    key_resp_yintian1.keys = []
    key_resp_yintian1.rt = []
    _key_resp_yintian1_allKeys = []
    # store start times for trialyintian1
    trialyintian1.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trialyintian1.tStart = globalClock.getTime(format='float')
    trialyintian1.status = STARTED
    thisExp.addData('trialyintian1.started', trialyintian1.tStart)
    trialyintian1.maxDuration = None
    # keep track of which components have finished
    trialyintian1Components = trialyintian1.components
    for thisComponent in trialyintian1.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialyintian1" ---
    trialyintian1.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 12.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_yintian1* updates
        
        # if text_yintian1 is starting this frame...
        if text_yintian1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_yintian1.frameNStart = frameN  # exact frame index
            text_yintian1.tStart = t  # local t and not account for scr refresh
            text_yintian1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_yintian1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_yintian1.started')
            # update status
            text_yintian1.status = STARTED
            text_yintian1.setAutoDraw(True)
        
        # if text_yintian1 is active this frame...
        if text_yintian1.status == STARTED:
            # update params
            pass
        
        # if text_yintian1 is stopping this frame...
        if text_yintian1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_yintian1.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_yintian1.tStop = t  # not accounting for scr refresh
                text_yintian1.tStopRefresh = tThisFlipGlobal  # on global time
                text_yintian1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_yintian1.stopped')
                # update status
                text_yintian1.status = FINISHED
                text_yintian1.setAutoDraw(False)
        
        # *sound_yintian1* updates
        
        # if sound_yintian1 is starting this frame...
        if sound_yintian1.status == NOT_STARTED and tThisFlip >= 4.0-frameTolerance:
            # keep track of start time/frame for later
            sound_yintian1.frameNStart = frameN  # exact frame index
            sound_yintian1.tStart = t  # local t and not account for scr refresh
            sound_yintian1.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_yintian1.started', tThisFlipGlobal)
            # update status
            sound_yintian1.status = STARTED
            sound_yintian1.play(when=win)  # sync with win flip
        
        # if sound_yintian1 is stopping this frame...
        if sound_yintian1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_yintian1.tStartRefresh + 3.0-frameTolerance or sound_yintian1.isFinished:
                # keep track of stop time/frame for later
                sound_yintian1.tStop = t  # not accounting for scr refresh
                sound_yintian1.tStopRefresh = tThisFlipGlobal  # on global time
                sound_yintian1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_yintian1.stopped')
                # update status
                sound_yintian1.status = FINISHED
                sound_yintian1.stop()
        
        # *text_89* updates
        
        # if text_89 is starting this frame...
        if text_89.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            text_89.frameNStart = frameN  # exact frame index
            text_89.tStart = t  # local t and not account for scr refresh
            text_89.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_89, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_89.started')
            # update status
            text_89.status = STARTED
            text_89.setAutoDraw(True)
        
        # if text_89 is active this frame...
        if text_89.status == STARTED:
            # update params
            pass
        
        # if text_89 is stopping this frame...
        if text_89.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_89.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                text_89.tStop = t  # not accounting for scr refresh
                text_89.tStopRefresh = tThisFlipGlobal  # on global time
                text_89.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_89.stopped')
                # update status
                text_89.status = FINISHED
                text_89.setAutoDraw(False)
        
        # *text_90* updates
        
        # if text_90 is starting this frame...
        if text_90.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            text_90.frameNStart = frameN  # exact frame index
            text_90.tStart = t  # local t and not account for scr refresh
            text_90.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_90, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_90.started')
            # update status
            text_90.status = STARTED
            text_90.setAutoDraw(True)
        
        # if text_90 is active this frame...
        if text_90.status == STARTED:
            # update params
            pass
        
        # if text_90 is stopping this frame...
        if text_90.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_90.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_90.tStop = t  # not accounting for scr refresh
                text_90.tStopRefresh = tThisFlipGlobal  # on global time
                text_90.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_90.stopped')
                # update status
                text_90.status = FINISHED
                text_90.setAutoDraw(False)
        
        # *key_resp_yintian1* updates
        waitOnFlip = False
        
        # if key_resp_yintian1 is starting this frame...
        if key_resp_yintian1.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_yintian1.frameNStart = frameN  # exact frame index
            key_resp_yintian1.tStart = t  # local t and not account for scr refresh
            key_resp_yintian1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_yintian1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_yintian1.started')
            # update status
            key_resp_yintian1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_yintian1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_yintian1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_yintian1 is stopping this frame...
        if key_resp_yintian1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_yintian1.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_yintian1.tStop = t  # not accounting for scr refresh
                key_resp_yintian1.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_yintian1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_yintian1.stopped')
                # update status
                key_resp_yintian1.status = FINISHED
                key_resp_yintian1.status = FINISHED
        if key_resp_yintian1.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_yintian1.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_yintian1_allKeys.extend(theseKeys)
            if len(_key_resp_yintian1_allKeys):
                key_resp_yintian1.keys = _key_resp_yintian1_allKeys[0].name  # just the first key pressed
                key_resp_yintian1.rt = _key_resp_yintian1_allKeys[0].rt
                key_resp_yintian1.duration = _key_resp_yintian1_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[sound_yintian1]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trialyintian1.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialyintian1.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialyintian1" ---
    for thisComponent in trialyintian1.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trialyintian1
    trialyintian1.tStop = globalClock.getTime(format='float')
    trialyintian1.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trialyintian1.stopped', trialyintian1.tStop)
    sound_yintian1.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_yintian1.keys in ['', [], None]:  # No response was made
        key_resp_yintian1.keys = None
    thisExp.addData('key_resp_yintian1.keys',key_resp_yintian1.keys)
    if key_resp_yintian1.keys != None:  # we had a response
        thisExp.addData('key_resp_yintian1.rt', key_resp_yintian1.rt)
        thisExp.addData('key_resp_yintian1.duration', key_resp_yintian1.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if trialyintian1.maxDurationReached:
        routineTimer.addTime(-trialyintian1.maxDuration)
    elif trialyintian1.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-12.000000)
    thisExp.nextEntry()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
