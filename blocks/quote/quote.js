export default function decorate(block) {
    const [quoteWrapper] = block.children;
    block.classList.add(`test-class`);
    
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = quoteWrapper.textContent.trim();
    quoteWrapper.replaceChildren(blockquote);

  
  }
