(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{602:function(e,a,t){"use strict";t.r(a);var s=t(21),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("As a rule, every program consumes some data as a way to communicate with the outer world. It can be a user input from the console, a configuration file, or something else. Java has a common mechanism for consuming data called "),t("strong",[e._v("input streams")]),e._v(". We have already provided some text as data for our programs, and now it is time to dive deeper and explore the whole mechanism.")]),e._v(" "),t("h2",{attrs:{id:"sources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sources"}},[e._v("#")]),e._v(" Sources")]),e._v(" "),t("p",[e._v("Data can be obtained from many points considered as providers. Besides standard input or files, those can be network connections, in-memory buffers, or even objects. All of them are called "),t("strong",[e._v("sources")]),e._v(" for input streams. In fact, a source is any data that can be consumed and processed by a program. Working with data is quite a specific thing, and each source needs a specialized class.")]),e._v(" "),t("h2",{attrs:{id:"character-streams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#character-streams"}},[e._v("#")]),e._v(" Character streams")]),e._v(" "),t("p",[e._v("There are several classes for reading text. They are called character input streams and allow reading text data: "),t("code",[e._v("char")]),e._v(" or "),t("code",[e._v("String")]),e._v(". For instance, there are "),t("code",[e._v("FileReader")]),e._v(", "),t("code",[e._v("CharArrayReader")]),e._v(", "),t("code",[e._v("StringReader")]),e._v(", etc.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("The class name indicates what type of source it uses as input and usually ends with "),t("em",[e._v("Reader,")]),e._v(" since "),t("em",[e._v("all")]),e._v(" such classes extend the "),t("code",[e._v("java.io.Reader")]),e._v(" class.")])]),e._v(" "),t("p",[e._v("Each class provides a set of useful methods while they also have common methods for reading data:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("int read()")]),e._v(" reads a single character. If the end of the stream is reached, the method returns the value "),t("code",[e._v("-1")]),e._v(". Otherwise, it returns the numerical representation of the character according to the current encoding;")]),e._v(" "),t("li",[t("code",[e._v("int read(char[] cbuf)")]),e._v(" reads a sequence of characters into the passed array up to its capacity and returns the number of characters that were actually read. It can also return "),t("code",[e._v("-1")]),e._v(" in case no data was read;")]),e._v(" "),t("li",[t("code",[e._v("int read(char[] cbuf, int off, int len)")]),e._v(" reads characters into a portion of an array.")])]),e._v(" "),t("p",[e._v("These methods return the number of characters that were actually read or "),t("code",[e._v("-1")]),e._v(". They also block the program from running until some input is available or the end of the stream is reached.")]),e._v(" "),t("p",[e._v("Another important method is "),t("code",[e._v("void close()")]),e._v(" that should be invoked after a stream was used.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("If you're familiar with the try-with-resources construction, you know it is a better way to prevent resource leaks. For now, we're skipping it for learning purposes.")])]),e._v(" "),t("h2",{attrs:{id:"example-of-a-character-stream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-of-a-character-stream"}},[e._v("#")]),e._v(" Example of a character stream")]),e._v(" "),t("p",[e._v("Let's consider "),t("code",[e._v("FileReader")]),e._v(" as an example of the "),t("code",[e._v("Reader")]),e._v(" classes. "),t("code",[e._v("FileReader")]),e._v(" has a set of constructors. Here are some of them:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("new FileReader(String fileName)")])]),e._v(" "),t("li",[t("code",[e._v("new FileReader(String fileName, Charset charset)")])]),e._v(" "),t("li",[t("code",[e._v("new FileReader(File file)")])]),e._v(" "),t("li",[t("code",[e._v("new FileReader(File file, Charset charset)")])])]),e._v(" "),t("p",[e._v("As you can see, it can read text data from the file indicated either by a path "),t("code",[e._v("String")]),e._v(" or as a "),t("code",[e._v("File")]),e._v(" object.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("A charset is a class that declares the encoding from sequences of bytes to characters. By default, java uses the UTF-16 encoding, suitable for most tasks. However, sometimes the file may have another encoding and you'll have to use a different charset to read the content of the file properly.")])]),e._v(" "),t("p",[e._v("Now let's try to read a file. Say we have a file "),t("code",[e._v("file.txt")]),e._v(" with the following content: "),t("code",[e._v("input stream")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Reader reader = new FileReader("file.txt");\n\nchar first = (char) reader.read(); // i\nchar second = (char) reader.read(); // n\n\nchar[] others = new char[12];\nint number = reader.read(others); // 10\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("After running the code, "),t("code",[e._v("others")]),e._v(" will contain "),t("code",[e._v("['p', 'u', 't', ' ', 's', 't', 'r', 'e', 'a', 'm', '\\u0000', '\\u0000']")]),e._v(".")]),e._v(" "),t("p",[e._v("Let's explain the result. Since we've read the first two letters into other variables, the first 10 characters of "),t("code",[e._v("others")]),e._v(" are filled starting from the third letter. When the stream reached the end of the file it stopped reading, so the last two characters are not updated.")]),e._v(" "),t("p",[e._v("When you create an empty array it is actually filled with default values, which are "),t("code",[e._v("'\\u0000'")]),e._v(" for a char array. This is the reason why the last 2 elements of "),t("code",[e._v("others")]),e._v(" are "),t("code",[e._v("'\\u0000'")]),e._v(".")]),e._v(" "),t("p",[e._v("The tricky thing here is that "),t("code",[e._v("'\\u0000'")]),e._v(" is interpreted as an empty symbol and not displayed at all, although technically it is present. Remember that when you read data into an array.")]),e._v(" "),t("p",[e._v("Another common way of reading a text data stream is to read it char by char until the stream is closed:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('FileReader reader = new FileReader("file.txt");\n\nint charAsNumber = reader.read();\nwhile(charAsNumber != -1) {\n    char character = (char) charAsNumber;\n    System.out.print(character);\n    charAsNumber = reader.read();\n}\nreader.close();\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("p",[e._v("When "),t("code",[e._v("-1")]),e._v(" is returned, it means the end of stream was reached, so that is there's nothing left to read.")]),e._v(" "),t("h2",{attrs:{id:"byte-streams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#byte-streams"}},[e._v("#")]),e._v(" Byte streams")]),e._v(" "),t("p",[e._v("Byte streams may seem more complicated so let's start with something you already know. To read some text data from the standard input we may create a "),t("code",[e._v("Scanner")]),e._v(" instance. You are familiar with the process:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Scanner scanner = new Scanner(System.in);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("code",[e._v("System.in")]),e._v(" here is actually an example of a byte input stream. There are other specialized byte stream classes: "),t("code",[e._v("ByteArrayInputStream")]),e._v(" is used for reading from "),t("code",[e._v("byte[]")]),e._v(", "),t("code",[e._v("FileInputStream")]),e._v(" is dedicated for files, "),t("code",[e._v("AudioInputStream")]),e._v(" is a way of consuming audio input and there's more.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("The class name of a byte stream indicates what type of source it uses as input and usually ends with "),t("em",[e._v("InputStream,")]),e._v(" since all such classes extend the "),t("code",[e._v("java.io.InputStream")]),e._v("class.")])]),e._v(" "),t("p",[e._v("All byte stream classes have methods for reading similar to character input streams:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("abstract int read()")]),e._v(" reads a single byte;")]),e._v(" "),t("li",[t("code",[e._v("int read(byte[] b)")]),e._v(" reads a number of bytes and stores them in a byte array;")]),e._v(" "),t("li",[t("code",[e._v("byte[] readAllBytes()")]),e._v(" reads all bytes.")])]),e._v(" "),t("p",[e._v("The method that reads bytes into an array, returns an "),t("code",[e._v("int")]),e._v(" value. It is the number of bytes that were actually read from the source. If "),t("code",[e._v("-1")]),e._v(" value is returned it is a sign that no bytes were read.")]),e._v(" "),t("p",[e._v("Each input stream class also has a "),t("code",[e._v("void close()")]),e._v(" method to release system resources.")]),e._v(" "),t("h2",{attrs:{id:"example-of-a-byte-stream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-of-a-byte-stream"}},[e._v("#")]),e._v(" Example of a byte stream")]),e._v(" "),t("p",[e._v("Suppose we have a file "),t("code",[e._v("file.txt")]),e._v(" that contains the following text: "),t("code",[e._v("input stream")]),e._v(". Let's read it using the "),t("code",[e._v("FileInputStream")]),e._v(" class. It can be created by using several constructors, such as:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("new FileInputStream(String pathToFile)")])]),e._v(" "),t("li",[t("code",[e._v("new FileInputStream(File file)")])])]),e._v(" "),t("p",[e._v("Here we create a file input stream by specifying the name of the file:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('FileInputStream inputStream = new FileInputStream("myfile.txt");\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("We are going to read the first five bytes:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("byte[] bytes = new byte[5];\nint numberOfBytes = inputStream.read(bytes);\nSystem.out.println(numberOfBytes); // 5\ninputStream.close();\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("Now "),t("code",[e._v("bytes")]),e._v("contains "),t("code",[e._v("['i', 'n', 'p', 'u', 't']")]),e._v(".")]),e._v(" "),t("p",[e._v("The byte-by-byte approach also works here, similar to the character streams example.")]),e._v(" "),t("h2",{attrs:{id:"testing-input-streams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing-input-streams"}},[e._v("#")]),e._v(" Testing input streams")]),e._v(" "),t("p",[e._v("In previous examples, we were considering reading data from files to show you how it is done. You can try it yourself at any moment. However, in the following coding problems, we are going to ask you to read data from standard input by other input streams classes.")]),e._v(" "),t("p",[e._v("And there are some things to keep in mind.")]),e._v(" "),t("p",[e._v("When testing your programs in IDE, you type the text and then press "),t("strong",[e._v("Enter")]),e._v(" to push the typed text into the input stream, like when you did with "),t("code",[e._v("Scanner")]),e._v(". In this case, the "),t("em",[e._v("end-of-line")]),e._v(" symbol is also appended as the last symbol of the typed sequence of characters and will be read into an array if that's what you do.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("Pressing Enter doesn't close the input stream*.* It is still opened and waits for input. To actually close the input stream you need to produce an "),t("em",[e._v("end-of-file")]),e._v(" event. In IDEA, you should press "),t("strong",[e._v("Ctrl+D")]),e._v(" (Windows and Linux) or "),t("strong",[t("command",[e._v("+D")])],1),e._v(" (MacOS).")])]),e._v(" "),t("h2",{attrs:{id:"what-type-of-stream-should-i-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-type-of-stream-should-i-use"}},[e._v("#")]),e._v(" What type of stream should I use?")]),e._v(" "),t("p",[e._v("The main difference between byte and character streams is that byte ones read input data "),t("em",[e._v("as bytes")]),e._v(" while character ones work with characters.")]),e._v(" "),t("p",[e._v("A computer understands only sequences of bytes. From this perspective, any data is a set of bytes and byte input streams are a common way of reading any kind of data. For computers, characters are still combinations of bytes defined by a charset specification.")]),e._v(" "),t("p",[e._v("On the contrary, as human beings, we are used to dealing with sequences of characters. Character input streams are aimed to read data which consists of characters. Under the hood, they still read bytes, but they immediately encode bytes to characters.")]),e._v(" "),t("p",[e._v("If you need to read a text, use character input streams. Otherwise, for example, while reading audio, video, zip, etc., use byte input streams.")]),e._v(" "),t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[e._v("Input streams provide a way to read data from a source. The source is a data provider like a console, standard input, a file, a string, or even a network connection. There are two types of sources: byte and character ones. Character input streams are intended for reading text only. Byte input streams allow reading sequences of raw bytes. Character input stream classes usually end with "),t("em",[e._v("Reader")]),e._v(". Similarly, byte input streams end with "),t("em",[e._v("InputStream")]),e._v(".")])])}),[],!1,null,null,null);a.default=r.exports}}]);