# Blog Lite

My Blog is a vanilla JavaScript app which enables the user to create, edit and delete articles. It's built in HTML, with vanilla CSS and JavaScript. App is structured in MVC (Model-View-Controller) architecture model, which splits the application into three parts for easier understanding and a more readable code.

You can check out [the live demo here](https://davidmaksic.github.io/Blog-Lite/).

<br>

Installation:
```
npm i
npm start
```

![main image](https://davidmaksic.vercel.app/assets/blog-BzPyGbQA.png)

<br>

## Initial screen
If there are no articles yet, user will be greeted with this message. Articles can be filtered by category and saved to the bookmarks.

![initial screen](https://davidmaksic.vercel.app/assets/blog-1-BqI6lMV-.png)

<br>

## Creating an article
When plus button is clicked, modal window will show up. In this modal user can write an article, along with deciding on a category. This creator features Markdown, which can be seen on the picture bellow.

![article creator](https://davidmaksic.vercel.app/assets/blog-2-B_2-ET5Q.png)

<br>

After publishing the article, modal will close and article will be displayed.

![article](https://davidmaksic.vercel.app/assets/blog-3-BrjqNRiH.png)

<br>

If user is not happy with the result, article can be edited or deleted.

![article options](https://davidmaksic.vercel.app/assets/blog-4-Ciyd8EYB.png)

<br>

## Bookmarked articles
Articles can be saved to the bookmarks, which can be found on the top-left part of the page.

![bookmarks](https://davidmaksic.vercel.app/assets/blog-5-DGn_7VWJ.png)
