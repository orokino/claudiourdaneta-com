---
title: "I built an AI agent. Here's what it taught me about clinical AI"
date: 2026-05-03
description: "What building my own AI agent taught me about context, determinism, and where this could fit into clinical radiology."
draft: false
translationKey: building-alaric
---

## **The "context"**

Ever since I watched *Iron Man* as a kid, one of the things that always stuck with me was Tony Stark's virtual assistant, **Jarvis**. Jarvis knew what Stark needed before he asked, and ran every task without screwing it up. The idea of a supercomputer that just helps you stayed in my head as pure science fiction, and over the years it faded away.

Many years later, the AI boom hits. I remember **Sam Altman's** tweet perfectly:

> today we launched ChatGPT. try talking with it here:
>
> http://chat.openai.com
>
> — Sam Altman, 7:38 p.m. · Nov 30, 2022

The first time I tried it, the feeling was bittersweet. It was like texting a know-it-all friend who'd do whatever you asked, but you just couldn't unsee the gaps. Sometimes it said nonsense, and the thing I always thought would stay uniquely human, **art**, was one of the first things it touched.

I've always loved tech, but coming from medicine I dismissed LLMs as non-deterministic scripts that hallucinate when they don't know the answer. In medicine, that kind of uncertainty has no place.

When I started med school I was firmly against using them. But as I watched my classmates use them and saw how much it helped them, little by little I started bringing them into my study routine. Still, I couldn't shake the feeling that something was missing.

Then one day the YouTube algorithm pushed me a video about something called **OpenClaw**. I had no idea how much that would change my trajectory. I'd been thinking the peak of ChatGPT use was asking it what amoxicillin is, ha. The video sent me down a rabbit hole into the latest in AI and these things called ***agents***. Models that don't just answer your questions, or do what you ask after the third explanation, but do things **proactively**.

That moment felt like the philosopher walking out of Plato's cave. The first thing I thought was: *"Wait. Jarvis is real."* I finally understood what was missing from LLMs. What I'd always wanted was for them to be like Jarvis.

The next step was obvious: build my own. But what to call it? Jarvis was the first option, but in my research I noticed everyone names theirs that. Trying to be different, I went with **Alaric**. I won't sit here and say I picked it for the etymology, but in hindsight it wasn't a bad choice.

> Alaric is a male name of Germanic origin meaning "ruler of all," "noble king," or "universal ruler." It comes from *ala* ("all" / "universal") and *ric* ("king," "ruler," "powerful").

## **What makes an agent like Alaric different from a regular LLM**

Beyond doing tasks without you having to ask, it lives inside your infrastructure and your files. It can read whatever documents you assign it and knows everything it needs to do its job well. Like Alfred with Bruce Wayne: he knows the entire backstory, and that's why he's the best butler Bruce could ask for.

## **Building it was harder than I thought**

I started with OpenClaw, the thing that kicked off the whole adventure. I quickly realized it was nowhere near ideal. The first 5 hours, I could barely get it to do basic things. By hour 10, I'd gotten it to roughly the level of the original ChatGPT. *Awesome*(?). Every time I got it to a decent point, an update would ship and something would break.

I was on the verge of giving up. I was spending more time fixing it than it was helping me. I wiped the whole thing clean.

Looking for alternatives on Reddit, I came across a mention of **Hermes**. I was skeptical at first, since it was a direct alternative to the software that had just stressed me out more than anything. With nothing to lose, I tried it. It worked almost instantly. Still buggy, sure, but a thousand times more manageable. The dopamine hit when it said *"Hello, I'm Alaric, your chief of operations"* was unreal, even if at that point it couldn't do anything any other off-the-shelf AI couldn't.

The first lesson of building an agent: the framework matters more than the model.

## **The stack**

Hermes as the framework. ChatGPT 5.4 mini via Codex as the model. Telegram as the comms channel because it's the simplest. Hooked up to my calendar and to my Notion, which I use as a second brain. 12 active cron jobs. The whole thing runs on an old laptop I repurposed as a personal Ubuntu server.

Why 5.4 mini and not something more capable? Because Codex comes bundled with my ChatGPT subscription, so the marginal cost of Alaric's API calls is basically zero. For a tool I hit dozens of times a day, that matters more than having the smartest model on the market. 5.4 mini is good enough as an agent, and it's fast. Raw intelligence wasn't the bottleneck here.

A concrete example of what this looks like in practice: every morning at 7am, a cron job has Alaric pull the day's calendar and the week's commitments from Notion, then ping me a brief over Telegram before I'm even out of bed. Small, deterministic things. Useful every day.

## **The moment it stopped feeling like just a personal project**

I asked Alaric to delete a few test **logs** in Notion. The plan was to start with a clean slate so the first official log would be *"Claudio Inc. is now live."* Instead of just doing it, he refused. He suggested archiving the older logs in a hidden view so mine would be the only one visible. He stuck to his own rules and solved the problem with a compromise: he keeps his logs, I get my first official log.

An agent that negotiates instead of executing blindly is exactly the property a clinical agent would need. Refusing to delete, modify, or act on critical data without understanding the context. It's not a small detail. It might be the difference between an agent you can use in medicine and one you can't.

## **What building it taught me**

Two things, and they're the ones that translate most directly to the clinical side.

**Context is what runs the show.** The more Alaric knows about me, my calendar, my Notion, my projects, the better it performs. Without context, even a smart LLM ends up guessing. With good, well-structured context, it stops playing games and starts reasoning about something real. In medicine this isn't a UX detail, it's the difference between a useful tool and a dangerous one. An agent that doesn't know the patient's history shouldn't be giving an opinion about their case.

**When you need deterministic outcomes, what matters is the boring infrastructure around the model.** Cron jobs, error handling, retries, validation. The LLM can decide *what* to do, but reliability comes from the rails you build around it. This cuts against the current hype, where everyone talks about bigger and bigger models. Anyone who's tried to put an LLM into a real workflow gets it fast.

## **Where this points**

The example I keep coming back to is **radiology**. The specialty of the moment, and not for good reasons. Radiology gets framed as the field most "**threatened**" by this technology, an idea I strongly disagree with.

Picture a radiologist showing up at the workstation in the morning with **60** studies on their list. For each one there's prior imaging, prior reports, clinical context, comparison studies. Most of it lives in PACS, and pulling it together by hand before each case is one of the biggest bottlenecks of the daily work.

An agent that does that work in advance, that pre-loads the priors, surfaces the relevant comparison, has the clinical context ready before the radiologist even sits down, is the natural extension of what Alaric already does for me with calendar and Notion. Same logic, same integrations, different domains.

I'm not naive about how far this is from clinical reality today. The regulation isn't fully there yet, especially in **Europe** with the AI Act and the GDPR applied to patient data. Clinically validating an agent that pre-processes information is an open problem. Hospital infrastructure isn't even close to ready. There are real reasons to move slowly.

That's why it matters to keep the line between human and machine clear. Practicing medicine isn't reducible to processing information. Human interaction, what Marañón called *the chair*, doesn't get delegated to an agent, and shouldn't get crowded out by bureaucracy either.

> "The doctor's best tool is the chair."
>
> — Gregorio Marañón (1887–1960)

But the patterns transfer. The problems I'm working through with Alaric, how to give it good context, how to make it deterministic when it has to be, how to plug it into other tools without opening security holes, are the same problems that'll need to be solved to bring agents into medical practice.

I'm not building Alaric to be a clinical tool. I'm building it because it's teaching me what I'll need to know.

So "Jarvis" does exist and he's my COO. Some day, hopefully, he'll be a radiologist's too.
