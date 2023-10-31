# PDF Book 



wkhtmltopdf --enable-local-file-access output.html tmp1.pdf

 pandoc toc1.md -s -t html5 | wkhtmltopdf toc --enable-local-file-access - output.pdf

 pandoc -s -f markdown -t html5 -o output.html toc1.md

 pandoc toc.md  -s -f markdown -t html5 -o output.html 


 pandoc toc1.md  -s -f markdown -t html5  | wkhtmltopdf toc --enable-local-file-access - output.pdf

<!-- # Convert md to html
pandoc -s -f markdown -t html5 -o output.html toc1.md

# Convert html to pdf
wkhtmltopdf --enable-local-file-access output.html tmp1.pdf -->



## Final
```bash

# Right click on markdown file and export as html
# change body style 
# font-size: var(--vscode-markdown-font-size, 14px);
# font-size: 1.5rem;
# line-height: var(--vscode-markdown-line-height, 22px);
# line-height: 2.2rem;
# Remove 
# img {
# 			max-width: 100%;
# 			max-height: 100%;
# 		}


wkhtmltopdf --enable-local-file-access sample.html sample.pdf
wkhtmltopdf --enable-local-file-access --print-media-type  toc1.html toc1.pdf
```
