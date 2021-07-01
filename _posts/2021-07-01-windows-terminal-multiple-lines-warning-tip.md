---
layout: post
title:  "Windows Terminal Multiple Line Paste Warninng"
date:   2021-07-01 00:08:00 -0400
categories: windows terminal
---
For a while now I've been using my desktop to do most of my work. This has left my laptop to be left on my shelf collecting dust for a while now. Since I plan on using my laptop more once I move out, I decided to sync some of the contents of my desktop with my laptop. Fortunately, I'm a pretty simple guy -- I like to game, and I like to code.

All that aside, I've been pretty interested in learning new programming skills such as web and software development and learning how to use Git and bash. Unfortunately, with the Windows default command prompt and powershell not being Unix based, I wasn't able to use bash and I wasn't really feeling it when I heard I had to dual boot Windows and some Linux Distro. Fortunately, one day when I was trying to set up Docker, I found out about Windows Subsystem for Linux (WSL). 

Incredible! Now I can use the Linux terminal on Windows without any annoying installations! Along with WSL I also found out about the Windows Terminal, a really clean and versatile terminal. I've been using the Windows Terminal for a while now especially when I try to compile and run C++ code for competitive programming. One thing that bothered me for a long time, when pasting in sample inputs with multiple lines was a constant warning that goes along the lines of:

> You are about to paste text that contains multiple lines. If you paste this text into your shell, it may result in the unexpected execution of commands. Do you wish to continue?

For the last time, YES! 

So, one simple way of fixing this is to go to the top of your Windows Terminal, under the drop down go to `Settings` and at the bottom go click `Open JSON File`. Once you're there, paste `"multiLinePasteWarning": false,` as a global setting. For example, some of the code near this setting is as shown:
{% highlight bash %}
    "copyFormatting": "none",
    "copyOnSelect": false,
    "multiLinePasteWarning": false,
{% endhighlight %}

今天就讲到这,
Timothy
