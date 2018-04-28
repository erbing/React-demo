### 在 react 中使用 less 或者 css 

    感觉是把 css 这种解析类型的  文档流文件进行了 对象化。


##### 使用方式

    简单粗暴

```javascript

    import style from '../assets/less/index.less'

    render() {

        return (
            <div className={style.main}>
                <div className="left"></div>
            </div>
        )

    }
```

```less

.main{
    width: 100%;
    height: 50px;
    .left{
        width: 100px;
        float: left;
    }
}

```

##### 这里又一个重要的 概念就是 css 模块化开发

    这个需要是 配合 webpack 来进行配置的。 主要的配置方向是  style-loader

```javascript
            {
                test: /\.css/,
                loaders: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            }
```

    其中options 对象 还有一些 关于 css 命名的配置。下去可以自己看