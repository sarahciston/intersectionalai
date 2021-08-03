

// let scalarapi = require(scalarapi)
// let jquery = require(jquery-3.6.0.min)

// // using SCALARAPI library
// $( document ).ready( function() { 
        
//     scalarapi.setBook( "http://scalar.usc.edu/works/intersectional-ai-toolkit" ); 
    
//     //load a node, "index" for homepage or other name)
//     if ( scalarapi.loadNode( "index", true, handleSuccess, handleFailure, 1 ) == "loaded" ) {
//         handleSuccess();
//     };    
                
//     function handleSuccess() {
//         console.log("reached success func")
//         let node = scalarapi.getNode( "index" );
//         console.log(node)
//         $( "body" ).append( "<p>This page is called <b>" + node.getDisplayTitle() + "</b>.</p>" );
//         console.log("hello world" + node.getDisplayTitle())
//         let pathContents = node.getRelatedNodes( "path", "outgoing" );
//         $( "body" ).append( "<p>It is a path containing " + pathContents.length + " items.</p>" );
//     }   	 
            
//     function handleFailure() {
//         $( "body" ).append( "<p>The node could not be loaded.</p>" );
//         console.log("couldn't load")
//     }		    
    
// });

//FETCH DIRECT FROM SCALAR API

// let heads = {
//     'Content-Type': 'application/json'
//     } 

// let opt = { 
//     method: 'POST', 
//     mode: 'no-cors',
//     credentials: 'include',
//     headers: heads
//     }

// let response = fetch('https://scalar.usc.edu/works/intersectional-ai-toolkit/rdf/instancesof/page?rec=0&start=0&results=20&format=json', opt).then(function(res){ 
//     console.log(res)
//     return res.json() 
// }).then(data => {
//     let para = document.createElement('P')
//     para.innerText(data)
//     document.body.append(para)
// }).catch(err => console.log(err));

        

