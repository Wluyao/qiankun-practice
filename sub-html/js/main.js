const render = () => {
  document.querySelector('#current-env').innerHTML = 'qiankun'

  const node = document.createElement('div')
  node.innerHTML = `<a target="_blank" href="${window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__}">打开独立运行环境</a>`

  document.querySelector('.container').appendChild(node)

  return Promise.resolve();
};

(global => {
  global['prehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: (options) => {
      console.log('purehtml mount', options);
      return render(options);
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
