'use strict'

$(document).ready(function () {
    function Fancyanimal(fancyanimal) {
        this.image_url = fancyanimal.image_url;
        this.title = fancyanimal.title;
        this.description = fancyanimal.description;
        this.keyword = fancyanimal.keyword;
        this.horns = fancyanimal.horns;
        Fancyanimal.all.push(this);
    }
    Fancyanimal.all = [];
    console.log(Fancyanimal.all)

    Fancyanimal.prototype.render = function () {
        let fancyanimalClone = $('#photo-template').clone();
        fancyanimalClone.first().removeData()
        fancyanimalClone.find('h2').text(this.title);
        fancyanimalClone.find('img').attr('src', this.image_url);
        fancyanimalClone.find('img').attr('alt', this.title);
        fancyanimalClone.find('img').attr('id', this.keyword);
        fancyanimalClone.find('#description').text(this.description);
        fancyanimalClone.find('#keyword').text(this.keyword);
        fancyanimalClone.find('#horns').text(this.horns);
        fancyanimalClone.attr('id', this.title);
        $('main').append(fancyanimalClone);

        // fancyanimalClone.removeId("photo-template");
        let container = document.getElementById('select');

        let option1 = document.createElement('option');
        container.appendChild(option1);
        option1.textContent = this.keyword;
        option1.setAttribute('id', "this.keyword");

        // $(this.keyword).hide();
        // $("#photo-template").hide();
        // $('#select').on('change', function() {
            
        //         $("#photo-template").show();
            
            // else 
            // {
            //     $("#photo-template").hide();
            // }
        // })
        // .change();

     
        // $('#show-hide').click(function () {
        //     var img_selector = $(this).attr('href');
        //     // var img_switch = $(this);
        //     $(img_selector).toggle(function () {
        //         if ($(this).css('display') === 'none') {
        //             $(this).html('Show Image');
        //         } else {
        //             $(this).html('Hide Image');
        //         }
        //     });
        // });

        // $( "#select" ).change(function() {
        //     var selectedVal = $("#select option:selected").val();
            // alert("Hi, your favorite programming language is " + selectedVal);  
            // if (selectedVal==this.keyword){
                // alert("Hi, your favorite programming language is " + selectedVal);
                // console.log(this.keyword);
            // }
        //   });
    
        //     $('#select').click(function(){
         
        //     $('#photo-template').hide('slow');
        //     console.log( $('#photo-template').hide('slow'));
            
        // }); 
        // option1.onclick = function() {
        //     $( "#photo-template" ).hide(this.keyword);
        // }
        // 

        // let h2 = document.createElement('h2');
        // div.appendChild(h2);
        // let img = document.createElement('img');
        // img.setAttribute('src', this.image_url);
        // // img.setAttribute('display', "none");
        // div.appendChild(img);
        // let p1 = document.createElement('p');
        // p1.textContent = this.description;
        // div.appendChild(p1);    
        // let p2 = document.createElement('p');
        // p2.textContent = this.keyword;
        // div.appendChild(p2);
        // let p3 = document.createElement('p');
        // p3.textContent = this.horns;
        // div.appendChild(p3);

        // $("option").click(function(){
        //     $("img").hide();
        //   });
        //   $("option").click(function(){
        //     $("p").show();
        //   });

        console.log(fancyanimalClone);
    }
    const jsonFile = () => {

        $.ajax("data.json", { method: "GET", dataType: "JSON" }).then(data => {
            data.forEach(fancyanimalItem => {
                console.log(data);
                let fancyanimal1 = new Fancyanimal(fancyanimalItem);
                // let container=document.getElementById('container');
                // let div=document.createElement('div');
                // container.appendChild(div);
                // let h2 = document.createElement('h2');
                // div.appendChild(h2);
                // let img = document.createElement('img');
                // img.setAttribute('src', Fancyanimal.image_url);
                // img.setAttribute('display', "none");
                // div.appendChild(img);
                // let p1 = document.createElement('p');
                // p1.textContent = Fancyanimal.description;
                // div.appendChild(p1);    
                // let p2 = document.createElement('p');
                // p2.textContent = Fancyanimal.keyword;
                // div.appendChild(p2);
                // let p3 = document.createElement('p');
                // p3.textContent = Fancyanimal.horns;
                // div.appendChild(p3);



                console.log(fancyanimal1);
                fancyanimal1.render();
            });
        });

    };
    jsonFile();
});