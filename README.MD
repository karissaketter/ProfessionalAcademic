# HOW TO EDIT AND CHANGE

## Where to find code
The code is held under ```app/components```, where each section of the website is split. The format should be:
- Header
- Hero
- x
- y
- z
- Footer

All of the code is then taken, imported into ```app/page.tsx```, which holds the above format, so you could swap the sections around.

The paragraphs that you can edit will be split with comments, or blank space. Change anything within these tags:
- ```<h1> LOREM IPSUM </h1>``` (any h1, h2, h3, etc. These are header tags)
- ```<p> LOREM IPSUM </p>``` (regular paragraph text)

There may be extra text inside the tags, such as:
- ```<p className="text-gray-300 text-xs md:text-sm max-w-xs"> LOREM IPSUM <br></br> </p>```.
Make sure to only change the lorem ipsum part, as these are used to add design.

## To save changes
After editing the content, save the files regular style, then open up a terminal. In vscode, it is ```ctrl + shift + p``` and mac is probably ```cmd + shift + p```.

Make sure you're in the correct directory, then input:
- ```git add .```
- ```git commit -m "LOREM IPSUM"```
- ```git push```



