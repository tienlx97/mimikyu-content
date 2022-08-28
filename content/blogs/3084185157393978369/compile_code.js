/*@jsxRuntime automatic @jsxImportSource react*/
const {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];
const {useMDXComponents: _provideComponents} = arguments[0];
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    a: "a",
    em: "em",
    strong: "strong",
    del: "del",
    blockquote: "blockquote",
    ol: "ol",
    li: "li",
    ul: "ul",
    code: "code",
    pre: "pre",
    hr: "hr"
  }, _provideComponents(), props.components), {PostImage} = _components;
  if (!PostImage) _missingMdxReference("PostImage", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "This is h1"
    }), "\n", _jsx(_components.h2, {
      children: "This is h2"
    }), "\n", _jsx(_components.h3, {
      children: "This is h3"
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.a, {
        href: "http://mimikyu.netlify.app/",
        children: "This is text link"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.em, {
        children: "This is emphasis"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "This is bold"
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.em, {
        children: _jsx(_components.strong, {
          children: "This is emphasis bold"
        })
      })
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.del, {
        children: "This is strike through"
      })
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "This is quote"
      }), "\n"]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "This is ol 1"
      }), "\n", _jsx(_components.li, {
        children: "This is ol 2"
      }), "\n"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "This is ol 1"
      }), "\n", _jsx(_components.li, {
        children: "This is ol 2"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "This is inline code"
      })
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-js",
        children: "const r = 'This is code block';\n//...\nconsole.log(r);\n"
      })
    }), "\n", _jsx(_components.p, {
      children: "This is paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula pretium dolor vel gravida. Donec feugiat tristique ullamcorper. Maecenas porttitor finibus tellus dapibus vehicula. Aenean pretium, libero at posuere scelerisque, arcu nisi consequat tortor, ac euismod sapien enim varius neque. Sed non egestas elit. Sed convallis scelerisque neque, id ultrices massa placerat interdum. Nam rutrum nibh nec suscipit porttitor. Morbi vel molestie sapien."
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(PostImage, {
      src: "https://www.joshwcomeau.com/_next/image/?url=%2Fimages%2Fterminal-for-js-devs%2Ft-cd-up.png&w=1920&q=75",
      width: 4096,
      height: 2258,
      alt: "This is image",
      title: "This is image"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
return {
  default: MDXContent
};
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
