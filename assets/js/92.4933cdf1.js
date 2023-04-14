(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{591:function(e,t,a){"use strict";a.r(t);var s=a(21),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticStyle:{"background-image":"url(https://cdn.jsdelivr.net/gh/JimFKppt/Pictures@master/static_files/img/milad-fakurian-UiiHVEyxtyA-unsplash.jpg)","background-size":"cover"}},[a("iframe",{attrs:{src:e.$withBase("/markmap/Markmap_Theory：Dependency management.html"),width:"100%",height:"450",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"}})]),e._v(" "),a("p",[e._v("Small programs that you write when learning a language may not use any external libraries at all. When you need some functionality, you will find it in the standard library or create it yourself. However, it is quite difficult to develop a real application that doesn't use any libraries because they save tons of your time and provide solutions tested by millions of people around the world.")]),e._v(" "),a("p",[e._v("In this topic, we will learn how to add external libraries to our applications using Gradle.")]),e._v(" "),a("h2",{attrs:{id:"how-to-add-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-dependencies"}},[e._v("#")]),e._v(" How to add dependencies?")]),e._v(" "),a("p",[e._v("In Gradle terminology, all external libraries are called "),a("strong",[e._v("dependencies")]),e._v(". As a rule, they are packaged in JAR files. Gradle can automatically download them and add them to the project. It saves a lot of time and solves possible conflicts between versions of libraries.")]),e._v(" "),a("p",[e._v("Where do we get these dependencies and how do we add them to a project? To use a class, you need to have it locally, and your JVM must know that you have it. If you want to do it manually, you need to find and download such jars on your own and add them to the classpath of your project. Sounds quite tedious, right?")]),e._v(" "),a("p",[e._v("Fortunately, dependency management is one of the key features of Gradle. You don’t even need a plugin for it. To add an external library to a project, you need to do exactly two steps:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Define a repository")]),e._v(" where to search for dependencies.")]),e._v(" "),a("li",[a("strong",[e._v("Define a dependency")]),e._v(" that you want to include in your project.")])]),e._v(" "),a("p",[e._v("Now, let's consider these steps in more detail.")]),e._v(" "),a("h2",{attrs:{id:"repository-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repository-definition"}},[e._v("#")]),e._v(" Repository definition")]),e._v(" "),a("p",[e._v("Repositories are just places where libraries are stored. Any project can use zero or more repositories.")]),e._v(" "),a("p",[e._v("There are different possible formats of repositories:")]),e._v(" "),a("ul",[a("li",[e._v("a Maven compatible repository (e.g.: "),a("a",{attrs:{href:"https://mvnrepository.com/repos/central",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven Central"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://bintray.com/bintray/jcenter",target:"_blank",rel:"noopener noreferrer"}},[e._v("JCenter"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://maven.google.com/web/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("li",[e._v("an Ivy compatible repository;")]),e._v(" "),a("li",[e._v("local (flat) directories.")])]),e._v(" "),a("p",[e._v("It's possible to host repositories like "),a("strong",[e._v("Maven")]),e._v(" or "),a("strong",[e._v("JCenter")]),e._v(" locally in your organization, but that is out of the scope of this tutorial. We will only consider public online versions of them.")]),e._v(" "),a("p",[e._v("Gradle has four aliases that you can use when adding Maven compatible repositories to the project.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("mavenCentral()")]),e._v(": fetches dependencies from the "),a("a",{attrs:{href:"https://mvnrepository.com/repos/central",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven Central Repository"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("jcenter()")]),e._v(": fetches dependencies from the "),a("a",{attrs:{href:"https://bintray.com/bintray/jcenter",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bintray’s JCenter Maven repository"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("mavenLocal()")]),e._v(": fetches dependencies from the local Maven repository.")]),e._v(" "),a("li",[a("code",[e._v("google()")]),e._v(": fetches dependencies from "),a("a",{attrs:{href:"https://maven.google.com/web/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Maven repository"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Defining a repository in Gradle is a piece of cake. Just add this to your "),a("code",[e._v("build.gradle")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("repositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mavenCentral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("jcenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("Also, you can just download the jars you need and place them into some directory on your computer, commonly in the "),a("code",[e._v("libs")]),e._v(" folder of your project. This comes in handy when the jars you need are not available in public repositories.")]),e._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[e._v("repositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    flatDir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        dirs "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'lib'")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("The following picture demonstrates how to add dependencies from different repositories using Gradle.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://ucarecdn.com/8db83b02-505f-478c-a2a9-ba2a753c26c5/",alt:"img"}})]),e._v(" "),a("p",[e._v("Now let's find out how to download dependencies from these repositories.")]),e._v(" "),a("h2",{attrs:{id:"dependencies-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-definition"}},[e._v("#")]),e._v(" Dependencies definition")]),e._v(" "),a("p",[e._v("To add a new dependency to your project, first, you need to identify it by the following attributes: "),a("code",[e._v("group")]),e._v(", "),a("code",[e._v("name")]),e._v(" and "),a("code",[e._v("version")]),e._v(". All these attributes are required when you use Maven compatible repositories. If you use other repositories, some attributes might be optional. For example, a flat repository only needs a name and a version.")]),e._v(" "),a("p",[e._v("There are several ways to find these attributes. Some library maintainers are nice enough to list them on their website or git repository. Also, you can just search for them in your preferred repository.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://ucarecdn.com/b347cf3f-90ea-4944-b2b8-1b3e29849ff4/",alt:"img"}})]),e._v(" "),a("p",[e._v("Maven Central search example")]),e._v(" "),a("p",[e._v("All the dependencies are grouped into a named set of dependencies called "),a("strong",[e._v("configurations")]),e._v(". Each of them has different characteristics and determines the following points:")]),e._v(" "),a("ul",[a("li",[e._v("the availability of dependencies on building steps;")]),e._v(" "),a("li",[e._v("the need to include dependencies in the final build artifact;")]),e._v(" "),a("li",[e._v("the visibility of dependencies for programmers who use your project as a library.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("'java'")]),e._v(" and "),a("code",[e._v("'kotlin'")]),e._v(" plugins add a number of these configurations to your project. There are four of them:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("implementation")]),e._v(" configuration means that the dependency is available at compile-time and it can't be exposed to people who use your compiled code as an external library in their own projects. This configuration is considered the default one.")]),e._v(" "),a("li",[a("code",[e._v("compileOnly")]),e._v(" configuration is used to define dependencies that should only be available at compile-time, but you do not need them at runtime.")]),e._v(" "),a("li",[a("code",[e._v("runtimeOnly")]),e._v(" is used to define dependencies that you need only during runtime, and not at compile time.")]),e._v(" "),a("li",[a("code",[e._v("api")]),e._v(" configuration is similar to "),a("code",[e._v("implementation")]),e._v(", but will be exposed to the programmers who use your compiled code as a library in their projects.")])]),e._v(" "),a("p",[e._v("In an existing project, you may see "),a("code",[e._v("compile")]),e._v(" and "),a("code",[e._v("runtime")]),e._v(" configurations as well, but they are deprecated now. Consider using "),a("code",[e._v("implementation")]),e._v(" and "),a("code",[e._v("runtimeOnly")]),e._v(" instead.")]),e._v(" "),a("p",[e._v("There also exist the same configurations only with the "),a("code",[e._v("test")]),e._v(" prefix (e.g. "),a("code",[e._v("testImplementation")]),e._v("). Since tests are compiled and run separately and are not included in the final JAR (as well as their dependencies), they have their own set of dependencies. It helps decrease the size of a JAR, which is especially useful in Android development.")]),e._v(" "),a("p",[e._v("Please, note, that at this moment, you do not need to understand everything about configurations. Usually, the type of dependency configuration is already specified when you copy dependency info from an online repository or a website. If you would like to read more about configurations, "),a("a",{attrs:{href:"https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_configurations_graph",target:"_blank",rel:"noopener noreferrer"}},[e._v("see the official Gradle docs"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("When we decided on what dependencies we want and settled on their configurations, we are ready to add them to our "),a("code",[e._v("build.gradle")]),e._v(", which is as simple as adding repositories.")]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("dependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// This dependency is used by the application.")]),e._v("\n    implementation group"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" 'com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("guava'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[e._v("'guava'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" '"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("jre'\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Use JUnit test framework only for testing")]),e._v("\n    testImplementation 'junit"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("junit"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.12")]),e._v("'\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// It is only needed to compile the application")]),e._v("\n    compileOnly 'org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("projectlombok"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("lombok"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.18")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".4")]),e._v("'\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("Here, we add these three dependencies as an example:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Guava")]),e._v(" library, provides useful collections and utils for a project;")]),e._v(" "),a("li",[a("strong",[e._v("JUnit")]),e._v(", used for testing purposes;")]),e._v(" "),a("li",[a("strong",[e._v("Lombok")]),e._v(", modifies bytecode at compile time and isn't necessary anymore after compilation.")])]),e._v(" "),a("p",[e._v("As you may have noticed, there are two ways of declaring dependencies: the one where we explicitly declare group, name, and version, and the one where we just list them separated by the colon. Both are perfectly fine and are up to your preferences. Note that Groovy syntax is flexible and you can use either single or double quotes for the dependency string and optionally enclose it in parentheses. All the following declarations are equally valid:")]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("implementation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"com.google.guava:guava:28.0-jre"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 2")]),e._v("\nimplementation "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"com.google.guava:guava:28.0-jre"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 3")]),e._v("\nimplementation 'com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("guava"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("guava"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("jre'\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 4")]),e._v("\ndef guava_version "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"28.0-jre"')]),e._v("\nimplementation "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"com.google.guava:guava:$guava_version"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("After adding dependencies in the "),a("code",[e._v("build.gradle")]),e._v(" file, you can use the libraries in your source code, but do not forget to import them. Gradle will automatically download the libraries from repositories when building the project.")]),e._v(" "),a("h2",{attrs:{id:"colorful-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#colorful-world"}},[e._v("#")]),e._v(" Colorful world")]),e._v(" "),a("p",[e._v("As an example of using external libraries, we take a look at a program that prints colored text messages.")]),e._v(" "),a("ol",[a("li",[e._v("In the "),a("strong",[e._v("dependencies")]),e._v(" section of the "),a("code",[e._v("build.gradle")]),e._v(" file we need to include JCDP library:")])]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("implementation group"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" 'com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("diogonunes'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[e._v("'JCDP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" '"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".3")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".1")]),e._v("'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("\\2. And then import and use it inside the source code. Here are Java and Kotlin examples.")]),e._v(" "),a("p",[e._v("Java:")]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("package")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("hyperskill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("gradleapp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("diogonunes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("jcdp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ColoredPrinter")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("diogonunes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("jcdp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Ansi")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("App")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ColoredPrinter")]),e._v(" printer "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ColoredPrinter\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n        printer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello, colorful world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Ansi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Attribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("BOLD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Ansi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("FColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("BLUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Ansi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("BColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("WHITE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("p",[e._v("Kotlin:")]),e._v(" "),a("div",{staticClass:"language-kotlin line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("package")]),e._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("hyperskill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("gradleapp\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("diogonunes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("jcdp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ColoredPrinter\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("diogonunes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("jcdp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Ansi\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fun")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("val")]),e._v(" printer "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ColoredPrinter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n    printer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello, colorful world!"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            Ansi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Attribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("BOLD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" Ansi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("FColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("BLUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" Ansi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("BColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("WHITE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("Both programs print the same colored message: "),a("strong",[e._v("Hello, colorful world!")])]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("You've learned only the basics of dependency management, but this is enough to write programs with external libraries. As you may have noticed, Gradle is a very flexible tool for managing dependencies. It allows you to choose repositories where to download them and also to configure when to use dependencies: during compile-time, during runtime, or when testing, and so on. As an example, we examined a program that prints colored messages using an external library.")])])}),[],!1,null,null,null);t.default=n.exports}}]);