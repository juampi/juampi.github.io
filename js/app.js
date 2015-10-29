/* global angular */

$(document).ready(function() {
    $('.scrollspy').scrollSpy();
});

angular.module("myApp", []).
controller("myController", function myController() {
    this.skillCategories = [
        {
            name: "Web Development",
            skills: [
                { name: "HTML5", level: 0.95 },
                { name: "CSS3", level: 0.90 },
                { name: "JavaScript", level: 0.95 },
                { name: "jQuery", level: 0.85 },
                { name: "AngularJS", level: 0.90 },
                { name: "Node.js", level: 0.70 },
                { name: "Rails", level: 0.95 },
                { name: "Django", level: 0.60 },
                { name: "PHP", level: 0.70 },
                { name: "Bootstrap", level: 0.90 },
                { name: "Materialize", level: 0.85 }
            ]
        },
        {
            name: "Programming",
            skills: [
                { name: "Python", level: 0.95 },
                { name: "Ruby", level: 0.95 },
                { name: "C", level: 0.90 },
                { name: "C++", level: 0.80 },
                { name: "Java", level: 0.60 },
                { name: "Haskell", level: 0.75 },
                { name: "SQL", level: 0.85 }
            ]
        },
        {
            name: "Computer Science",
            skills: [
                { name: "Algorithms", level: 0.95 },
                { name: "Data Structures", level: 0.95 },
                { name: "Artificial Intelligence", level: 0.90 },
                { name: "Machine Learning", level: 0.90 },
                { name: "Cryptography", level: 0.90 },
                { name: "Networks", level: 0.90 },
                { name: "Security", level: 0.90 }
            ]
        }
    ];
    
    this.contactInfo = [
        {
            text: "Rosario, Argentina",
            icon: "home"
        },
        {
            text: "juampi@juampi.com",
            icon: "email"
        },
        {
            text: "+54 (341) 520-4722",
            icon: "phone"
        }
    ];
    
    this.footerLinks = [
        {
            text: "GitHub",
            href: "https://github.com/juampi"
        },
        {
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/juampi"
        }
    ];
});
