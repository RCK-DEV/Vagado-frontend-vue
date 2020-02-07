<template>
  <div class="about">
    <p>
      During the course Object-Orientented Analysis & Design i've learned methods and tools<br>
      which helped me gather and document requirements in a systematic way. This resulted in<br>
      a System Requirements Specification (SRS) which captured the important use cases and other important<br>
      requirements. <br><br>
      This document was used as input for the design of the required system. 
      The design was captured in a Software Design Description (SDD) which dictates how the system overall<br>
      looks like and how it will deliver the requirements. It describes the overall architecture, <br>
      the deployment environment of all sub-systems, and models of how different components<br>
       collaborate and how they are structured. And most importantly it explains why certain<br> 
       design decisions where made. <br><br>
       And what you're currently looking at is the end result of both the SRS and SDD.<br>
       The important part of this assignment was to utilize certain modeling techniques and methods<br>
       and make all the pieces connect with each other. For example whenever i mentioned a concept<br>
       in the SRS this same concept should be mentioned in the same way in the SDD or code. Thus<br>
       improving overall readability and traceability. <br><br>
       Oke, enough about the assignment. How is this app built and what does it do?<br><br>
       </p>
      
      <h3>How is the system built?</h3>
       <p>
       This app consists of three subsystems. The frontend which is what you're seeing now. <br>
       The frontend communicates with a A REST-API Backend through JSON. And the backend then<br>
       talks to a database.<br><br></p>

      <h3>Vue Frontend</h3>
       <p>
       The frontend is built in Vue. A javascript framework for building user interfaces<br>
       and single page applications for the webbrowser. I've chosen Vue because i never<br>
       worked with it before so i figured let's give it a try. And thankfully Vue was<br>
       set-up and deployed within in a few hours. As mentioned earlier the frontend<br>
       communicates with the REST-API Backend through JSON. Since i've decided to<br>
       put both subsystems on a different server the backend needs to be configured
       to allow cross-origin resource sharing CORS with the frontend.<br><br></p>

      <h3>Spring Web MVC REST-API Backend</h3>
       <p>
       The backend is built using Spring Web MVC. The reason i've chosen this framework<br>
       is because the school-assignment bounded me to build the domain logic in Java.<br>
       Another reason i've chosen Spring over other popular frameworks is because it's<br>
       main concepts focus on Dependency Injection. Since the course was also about<br>
       design patterns this seemed like a good fit.<br>
       Spring was also bootstrapped and deployed within a few hours thanks to <a href="https://start.spring.io/">Spring Boot.</a><br>
       This saved a lot of hazzle into configuring Spring.<br><br></p>

      <h3>Backend request flow and design patterns used</h3>
      <p>
       All requests to the backend first end up in one of the router components. <br>
       This component utilizes the Frontend Controller Design Pattern, meaning<br>
       that each router is responsible for handling and passing requests for a specific<br>
       use case. Like for instance the QuizController only communicates with components<br>
       which are related to the UC1. Play Quiz use case.<br>
       Controllers that need to use components outside of the main use case utilize a Facade class.<br>
       This class, as the name implies, uses the Facade pattern which helps decouple the Controller<br>
       from all the different components it needs to interact with.<br><br>
       To be continued..</p><br><br>
       Icons for Vagado logo made by <a href="https://www.flaticon.com/authors/prosymbols" title="Prosymbols">Prosymbols</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  </div>
</template>
