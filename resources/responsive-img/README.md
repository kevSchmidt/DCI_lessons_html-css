# Responsive images
![](./img/respond-img.png)
![](./img/respond-img2.png)
## Art direction & Density Switching
```html
<div class="footer__logo-box">
        <picture class="footer__logo">
          <source
            srcset="./img/logo-green-small-1x.png 1x, ./img/logo-green-small-2x.png 2x"
            media="(max-width:37.5rem)" />
                
          <img
            srcset="./img/logo-green-1x.png 1x, ./img/logo-green-2x.png 2x"
            alt=" Full logo"
          />
        </picture>
      </div>
```
## Density & Resolution Switching
```html
<img
     srcset="./img/nat-1.jpg 300w, ./img/nat-1-large.jpg 1000w"
     sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 300px"
     alt="Photo 1"
     class="composition__photo composition__photo--p1"
     src="./img/nat-1-large.jpg"
/>
```
