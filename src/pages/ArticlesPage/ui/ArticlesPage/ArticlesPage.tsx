/* eslint-disable max-len */
import { Article, ArticleList, ArticleView } from 'entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
   className?: string;
}
const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS for 2022?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'Raisa',
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=Pale',
    },
    type: [
        'IT',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'The title of this block',
            paragraphs: [
                'The program, traditionally called «Hello, world!», is very simple. It outputs somewhere the phrase «Hello, world!», or another similar one, by means of a certain language.',
                "JavaScript is a language in which programs can be run in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not written a single line of JS code so far and you are reading this text in a browser, on desktop, which means you're literally seconds away from your first JavaScript program.",
                "There are other ways to run JS code in the browser. For example, if we talk about the usual use of JavaScript programs, they are loaded into the browser to make web pages work. As a rule, the code is formatted as separate files with the .js extension., that connect to web pages, but the program code can also be included directly in the page code. All this is done with the <script> tag. When the browser encounters such code, it executes it. For details on the script tag, see w3school.com. In particular, consider an example that demonstrates how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, let's create a new file in some text editor (for example, in VS Code or Notepad ++), which we will call hello.html, and add the following code to it:",
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'The title of this block',
            paragraphs: [
                'The program, traditionally called «Hello, world!», is very simple. It displays somewhere the phrase «Hello, world!», Or another similar one, by means of a certain language.',
                "There are other ways to run JS code in the browser. For example, if we talk about the usual use of JavaScript programs, they are loaded into the browser to make web pages work. As a rule, the code is formatted as separate files with the .js extension., that connect to web pages, but the program code can also be included directly in the page code. All this is done with the <script> tag. When the browser encounters such code, it executes it. For details on the script tag, see w3school.com. In particular, consider an example that demonstrates how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, let's create a new file in some text editor (for example, in VS Code or Notepad ++), which we will call hello.html, and add the following code to it:",
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - site screenshot',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'The title of this block',
            paragraphs: [
                "JavaScript is a language that can run programs in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven't written a single line of JS code so far and you're reading this text in a browser, on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
                "There are other ways to run JS code in the browser. For example, if we talk about the usual use of JavaScript programs, they are loaded into the browser to make web pages work. As a rule, the code is formatted as separate .js files that are connected to web pages, but program code can also be included directly in the page code. All this is done with the <script> tag. When the browser encounters such code, it executes it. For details on the script tag, see w3school.com. In particular, consider an example that demonstrates how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, let's create a new file in some text editor (for example, in VS Code or Notepad ++), which we will call hello.html, and add the following code to it:",
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'The title of this block',
            paragraphs: [
                // eslint-disable-next-line max-len
                "JavaScript is a language that can run programs in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven't written a single line of JS code so far and you're reading this text in a browser, on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
            ],
        },
    ],
} as Article;

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    // const articles = useSelector(getArt)

    return (

        <div className={classNames(cls.articlesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.BIG}
                articles={new Array(16)
                    .fill(0)
                    .map((item, index) => ({
                        ...article,
                        id: String(index),
                    }))}
            />
        </div>
    );
};
export default memo(ArticlesPage);
