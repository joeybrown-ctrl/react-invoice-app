# React Invoice App

**version 1.0.0**

[For deployed version, click me](https://invoice-pdf-app.herokuapp.com/){:target="\_blank"}

<br>

## What's this?

<br>

![Image of React Invoice App](https://raw.githubusercontent.com/joeybrown-ctrl/react-invoice-app/main/src/images/form.png)
<hr>

Here is an invoice to PDF app I built using React. It starts with a form where the user can input information and once the submit button is clicked, they are shown a preview of their invoice. There is an option to capture a PDF, which downloads a PDF file of the invoice to the user's device. 

<hr>

## The process

<br>

![Image of Invoice Preview](https://github.com/joeybrown-ctrl/react-invoice-app/blob/main/src/images/pdf-capture.png)
<hr>

I built a few different versions of this -- one in Node and one with a React component library -- before settling on simple React. I first built out the form page using class-based components but refactored using both the useState() and useRef() hooks from React. This app uses the React to PDF NPM package, which was complicated at first and then surprisingly simple once I got the hang of refs. All styling is done with plain CSS. The app is deployed to [Heroku](https://invoice-pdf-app.herokuapp.com/){:target="\_blank"}.

<hr>

## Future Direction

<br>

![Image of Invoice PDF](https://raw.githubusercontent.com/joeybrown-ctrl/react-invoice-app/main/src/images/invoice.png)

<hr>

I plan to add a few changes, like sprucing up the invoice template and adding a select to the payment methods field in the form. I sent this to a buddy who owns a small business and he was pretty excited as he spends a lot of time creating invoices from scratch. I told him to shoot me the template he built using Adobe Illustrator and I'd recreate the app for him to help with this aspect of his business. 


## Built With

* [React](https://reactjs.org/){:target="\_blank"}
* [React Hooks](https://reactjs.org/docs/hooks-intro.html){:target="\_blank"}
* [React to PDF](https://www.npmjs.com/package/react-to-pdf){:target="\_blank"}
* [Heroku](https://www.heroku.com){:target="\_blank"}
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS){:target="\_blank"}
* [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5){:target="\_blank"}
* [Markdown](https://guides.github.com/features/mastering-markdown/){:target="\_blank"}
* [Google Fonts](https://fonts.google.com/){:target="\_blank"}


## Built By

* [Joey Brown](https://github.com/joeybrown-ctrl){:target="\_blank"}



&copy; 2021 joeybrown-ctrl. All rights reserved.