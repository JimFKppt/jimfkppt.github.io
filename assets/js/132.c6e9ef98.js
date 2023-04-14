(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{631:function(e,t,s){"use strict";s.r(t);var o=s(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticStyle:{"background-image":"url(https://cdn.jsdelivr.net/gh/JimFKppt/Pictures@master/static_files/img/milad-fakurian-UiiHVEyxtyA-unsplash.jpg)","background-size":"cover"}},[s("iframe",{attrs:{src:e.$withBase("/markmap/Markmap_Theory：HTTP messa.html"),width:"100%",height:"450",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"}})]),e._v(" "),s("p",[e._v('The HTTP protocol relies on the "client-server" architecture that is built on the basis of messaging. HTTP messages are a way to exchange data between clients and servers in the Web. There are two types of messages: '),s("strong",[e._v("requests")]),e._v(" and "),s("strong",[e._v("responses")]),e._v(".")]),e._v(" "),s("p",[e._v("A "),s("strong",[e._v("request")]),e._v(" is an operation that a client wants to perform on the server, and a "),s("strong",[e._v("response")]),e._v(" is an answer from the server to an incoming request. Usually, programmers do not need to worry about creating HTTP messages since they are produced by browsers, applications, and web servers.")]),e._v(" "),s("h2",{attrs:{id:"the-format-of-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-format-of-messages"}},[e._v("#")]),e._v(" The format of messages")]),e._v(" "),s("p",[e._v("In the HTTP protocol, all messages consist of text strings. Both requests and responses have roughly the same standardized format:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Start line")]),e._v(" "),s("p",[e._v("which may vary:")]),e._v(" "),s("ul",[s("li",[e._v("for requests, it indicates the type of request ("),s("strong",[e._v("method")]),e._v(") and the URL where to send it ("),s("strong",[e._v("target")]),e._v(");")]),e._v(" "),s("li",[e._v("for responses, it contains a status code to determine the success of the operation.")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Headers")]),e._v(" which describe the message and convey various parameters.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Body")]),e._v(" in which the message data is located.")])])]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("start line")]),e._v(" and the "),s("strong",[e._v("header")]),e._v(" are required attributes, so the other parts may be empty.")]),e._v(" "),s("p",[e._v("The full format can be quite complicated for beginners, so we have considered only its part which is the most important for understanding the general principles.")]),e._v(" "),s("h2",{attrs:{id:"the-simplified-http-interaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-simplified-http-interaction"}},[e._v("#")]),e._v(" The simplified HTTP interaction")]),e._v(" "),s("p",[e._v("Here is a simplified HTTP interaction between a browser client and a server. The client and the server interact through requests and responses which follow the studied format:")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://ucarecdn.com/2db1fbaa-3aa7-4117-acd9-5f1c7f01bd10/",alt:"img"}})]),e._v(" "),s("p",[e._v("Note that there are other possible types of client programs, not just a browser. You can even write your own HTTP client and interact with servers. The only requirement is that such a program should always follow the message format.")]),e._v(" "),s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),s("p",[e._v("HTTP defines a set of request methods that specify what the desired action will be for a given resource. Despite the fact that their names can be nouns, these query methods are sometimes referred to as "),s("em",[e._v("HTTP verbs")]),e._v(".")]),e._v(" "),s("p",[e._v("Let's look at the most commonly used query methods:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("GET")]),e._v(" method is only used to retrieve data from the server;")]),e._v(" "),s("li",[s("code",[e._v("POST")]),e._v(" method is used to send data to the server;")]),e._v(" "),s("li",[s("code",[e._v("HEAD")]),e._v(" requests data from the server in the same way as the "),s("code",[e._v("GET")]),e._v(" method, but without a response body.")])]),e._v(" "),s("p",[e._v("Every time you click on a link, you basically communicate to your browser that you want to "),s("code",[e._v("GET")]),e._v(" this page. When you want to log in to your favorite site, you "),s("code",[e._v("POST")]),e._v(" your login and password to receive access to it.")]),e._v(" "),s("p",[e._v("There are "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("more available verbs to learn"),s("OutboundLink")],1),e._v(". You don't need to memorize them all right now.")]),e._v(" "),s("h2",{attrs:{id:"status-codes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status-codes"}},[e._v("#")]),e._v(" Status codes")]),e._v(" "),s("p",[e._v("For normal operation of computer programs and web pages that work via HTTP, except for the content of the page, the server returns a three-digit code, which specifies the response request. With the help of this code, it is possible to redirect the client to another site or to indicate the change of the page, as well as to detect an error in data processing.")]),e._v(" "),s("p",[e._v("Currently, the standards define five classes of status codes:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[e._v("1xx: Informational")])]),e._v(" "),s("th",[e._v('Codes beginning with "1" are called information codes. They report on how client requests are processed.')])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[e._v("2xx: Success")])]),e._v(" "),s("td",[e._v("Messages of this class inform that the action requested by the client has been successfully accepted for processing.")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("3xx: Redirection")])]),e._v(" "),s("td",[e._v("It means further action must be taken in order to complete the request.")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("4xx: Client Error")])]),e._v(" "),s("td",[e._v("It reports errors on the client's side.")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("5xx: Server Error")])]),e._v(" "),s("td",[e._v("The code indicates that the operation was unsuccessful due to the fault of the server.")])])])]),e._v(" "),s("p",[e._v("As an example, if you have successfully loaded a website, the response you received has code "),s("code",[e._v("200")]),e._v(". You can check this by opening the developer tools of your browser, and clicking on the Networking tab. Then try reloading the web page and you will see the status codes. The combination of keys to open the developer tools can vary. To give you an example, this might be "),s("code",[e._v("Ctrl + Shift + I")]),e._v(" or "),s("code",[e._v("F12")]),e._v(" on Windows and Linux, or "),s("code",[e._v("Cmd + Opt + I")]),e._v(" on macOS.")]),e._v(" "),s("p",[e._v("You have also probably been in a situation where your browser displays the "),s("strong",[e._v('"404 Not Found"')]),e._v(" message when you input the address of a page that does not exist. This is how these failure messages usually look:")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://ucarecdn.com/946f2b2d-b1fb-4c42-84cb-e36fa29b8117/",alt:"img"}})]),e._v(" "),s("p",[e._v("Browsers display error messages so that users can understand that something has gone wrong, rather than continuing to look at the blank page while waiting for the content to be downloaded.")]),e._v(" "),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),s("p",[e._v("Let's highlight the main points we've just discussed here:")]),e._v(" "),s("ul",[s("li",[e._v("HTTP messages can be of two types: requests and responses.")]),e._v(" "),s("li",[e._v("They are composed of the start line, headers, and body. The start line in requests includes method and target, while in responses it includes status code.")]),e._v(" "),s("li",[e._v("The commonly used methods in request messages are "),s("code",[e._v("GET")]),e._v(", "),s("code",[e._v("POST")]),e._v(", and "),s("code",[e._v("HEAD")]),e._v(".")]),e._v(" "),s("li",[e._v("Status code indicates the response from the server as a three-digit number. It can be one of 5 classes: Informational, Success, Redirection, Client Error, and Server Error.")])]),e._v(" "),s("p",[e._v("Now, when you've finished reading the topic, you can visit various sites in a browser and try to guess what your actions look like from a technical point of view.")])])}),[],!1,null,null,null);t.default=r.exports}}]);