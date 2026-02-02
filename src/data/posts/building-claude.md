*Back to Claude*

This isn't the first time I've used Claude Code, but a good revisit of this process of working (or bartering) with an AI to build your website is a really interesting one.

I created a markdown file as a plan, gave Claude another website I liked and some screenshots of website styling, and it went to work. I also pulled the [Claude UI skill](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md) to help me tweak the frontend, particularly for the sprites to line up on the ground.  




## Planning

I started with a 'SPEC.md' document – I thought about what exactly I wanted my website to look like, given I already had some different aesthetic deployed. This was as much for me as it was for Claude. I pulled up sample websites, I looked at diagrams and posters, and color combinations. In this markdown file, I supplied a website link, screenshots of websites and characters I wanted, and a screenshot of excalidraw – I'm no website designer, but I thought mockups would be a great way to get Claude on the same page. I passed a link to a website I liked, and the folder that contained all of my screenshots. 

```[text]
I want to redesign this website. Use the website design skill. 

AESTHETIC:
I want to an aesthetic that is slightly off white, and doodles, and also cute looking. 

Take inspiration from Notion, this website https://nabiu.studio/, and the images in the `inspiration` directly. 


Use the image of my sample landing page as a rough guideline. Let me know if you can't understand the website layout. 

I want it to look similar to the naibu studio design. A little doodle sun in the top right. 

My name should be in the center, with a short description. Below that, a 'ground', with some characters that are interactive. (hover, some element). Clicking on each one will pull up a different website. 


One of the sprites (people/objects) will be a link to the blog section of the website, which doesn't exist right now. 

Consult the plan, use the skill. Ask me lots of questions, then let's proceed with the refactor. 


The current landing page on the website should just be moved to a new index, at `/oldlandingpage`. 

Again, ask questions. Then Make a plan 
```


From here, Claude created its own markdown file – I used plan mode. It nailed the very simple landing page immediately, and the sprites took more work to get right. 

## Thoughts

I am absolutely the limiting factor here. It was great to write in excrutiating detail what exactly I wanted, and to provide Claude with material to work with. At the same time, I realized it wasn't very nice or cute or possibly even what I think my website should be!

The skill was extremely useful – Claude was able to use Playwright and tools to take screenshots of my browser, which meant it understood when I said "the sprite is floating". 

I also appreciated forcing Claude to explain my vision back to me – this back and forth process before code execution also ensured I knew what was going to happen. 

## Future Thoughts

Claude had creative liberty with the sprites, and some fo the layouts (and the sun generation). I want to explore if I give it more specific inputs, does the non-determinism decrease? Does it 'more accurately' respond to my aesthetic queries, or is the model good enough that I should let it run? 

To be honest, I'm not a designer, so I told Claude to use the design skill to help. I want to compare how much these 'soft skills' – a paragraph like **Claude you are an expert product designer** actually make a difference. 

