import { ToolDefinition } from '../types';

export const TOOLS: ToolDefinition[] = [
  // --- IMAGE TOOLS (1 - 15) ---
  {
    id: 'image-compressor',
    slug: 'image-compressor',
    name: 'Image Compressor',
    category: 'image',
    shortDesc: 'Compress JPG, PNG, and WebP images directly in your browser with adjustable quality.',
    description: 'Reduce image file size significantly without noticeable quality loss. All processing happens 100% locally in your browser using HTML5 Canvas—your photos are never uploaded to any remote server.',
    keywords: ['image compressor', 'compress jpg', 'reduce photo size', 'optimize png', 'shrink image'],
    popular: true,
    iconName: 'Minimize2',
    supportedFormats: 'JPG, PNG, WebP',
    howTo: [
      'Click or drag-and-drop your image into the upload box.',
      'Adjust the compression quality slider to your desired target balance.',
      'Click "Compress Image" to preview the optimized image and check the percentage saved.',
      'Click "Download Compressed Image" to save the file instantly.'
    ],
    faqs: [
      { question: 'Is my image uploaded to an external server?', answer: 'No. FreeToolsHub processes all images locally inside your browser memory using the client-side Canvas API.' },
      { question: 'What formats are supported?', answer: 'JPEG, PNG, and WebP formats are fully supported.' },
      { question: 'How much can I reduce the file size?', answer: 'Typically between 40% and 85% reduction depending on the source resolution and selected quality level.' }
    ]
  },
  {
    id: 'image-resizer',
    slug: 'image-resizer',
    name: 'Image Resizer',
    category: 'image',
    shortDesc: 'Resize photos by exact pixel dimensions or scale percentage while maintaining aspect ratio.',
    description: 'Scale down or enlarge pictures to exact pixel dimensions (width and height) or percentage with an optional aspect ratio lock.',
    keywords: ['resize image', 'scale photo', 'change dimensions', 'pixel resizer', 'image scaler'],
    popular: true,
    iconName: 'Maximize2',
    supportedFormats: 'JPG, PNG, WebP, GIF',
    howTo: [
      'Upload an image to inspect its current dimensions.',
      'Specify the new target width and height or select a scaling percentage.',
      'Check "Maintain aspect ratio" to avoid distortion.',
      'Apply resize and download your updated image.'
    ],
    faqs: [
      { question: 'Will resizing distort my photo?', answer: 'If "Maintain aspect ratio" is checked, width and height remain proportional so no distortion occurs.' },
      { question: 'Can I enlarge small images?', answer: 'Yes, but enlarging significantly beyond original dimensions may cause pixelation.' }
    ]
  },
  {
    id: 'jpg-to-png',
    slug: 'jpg-to-png',
    name: 'JPG to PNG Converter',
    category: 'image',
    shortDesc: 'Convert JPEG/JPG images to lossless PNG format in one click.',
    description: 'Transform JPG images into lossless PNG images with high fidelity. Ideal when you need to preserve crisp edges or prepare images for transparent overlays.',
    keywords: ['jpg to png', 'jpeg to png', 'convert jpg', 'make png'],
    popular: true,
    iconName: 'FileImage',
    supportedFormats: 'JPG, JPEG',
    howTo: [
      'Select or drag a JPG file into the dropzone.',
      'Click "Convert to PNG".',
      'Preview the lossless result and click "Download PNG".'
    ],
    faqs: [
      { question: 'Does converting JPG to PNG increase file size?', answer: 'Often yes, because PNG is a lossless format and does not discard detail like JPEG compression does.' }
    ]
  },
  {
    id: 'png-to-jpg',
    slug: 'png-to-jpg',
    name: 'PNG to JPG Converter',
    category: 'image',
    shortDesc: 'Convert PNG graphics and screenshots to lightweight JPG files.',
    description: 'Turn heavy PNG graphics and screenshots into compact JPEG photos. Choose a clean white or black background for any transparent regions.',
    keywords: ['png to jpg', 'png to jpeg', 'convert png', 'compress png to jpg'],
    popular: true,
    iconName: 'FileImage',
    supportedFormats: 'PNG',
    howTo: [
      'Drop your PNG file into the tool.',
      'Select your desired background fill for transparent pixels.',
      'Click "Convert to JPG" and download the resulting file.'
    ],
    faqs: [
      { question: 'What happens to transparent pixels?', answer: 'Because JPG does not support alpha transparency, transparent areas are cleanly filled with your selected background color (white by default).' }
    ]
  },
  {
    id: 'webp-converter',
    slug: 'webp-converter',
    name: 'WebP Converter',
    category: 'image',
    shortDesc: 'Convert JPG or PNG pictures to next-gen WebP format for high-speed websites.',
    description: 'WebP offers modern lossy and lossless compression that provides up to 30% smaller file sizes than standard JPEG or PNG.',
    keywords: ['webp converter', 'convert to webp', 'jpg to webp', 'png to webp', 'next gen image format'],
    popular: true,
    iconName: 'Zap',
    supportedFormats: 'JPG, PNG, GIF, BMP',
    howTo: [
      'Upload any standard image format.',
      'Select conversion mode and compression factor.',
      'Generate the WebP file and download.'
    ],
    faqs: [
      { question: 'Do modern browsers support WebP?', answer: 'Yes, 97%+ of modern browsers support WebP natively, including Chrome, Safari, Firefox, and Edge.' }
    ]
  },
  {
    id: 'image-cropper',
    slug: 'image-cropper',
    name: 'Image Cropper',
    category: 'image',
    shortDesc: 'Crop pictures to custom rectangles, squares, or predefined aspect ratios.',
    description: 'Trim away unwanted borders or isolate a focal point with interactive crop handles and presets like 1:1, 16:9, 4:3, or freeform.',
    keywords: ['crop image', 'photo cropper', 'trim picture', 'square photo crop', 'cut image'],
    popular: false,
    iconName: 'Crop',
    supportedFormats: 'JPG, PNG, WebP',
    howTo: [
      'Upload the picture you want to crop.',
      'Select an aspect ratio preset or adjust the crop box freely.',
      'Click "Crop Image" and download your cropped result.'
    ],
    faqs: [
      { question: 'Does cropping reduce resolution?', answer: 'The resulting image will have the exact pixel dimensions of the cropped area.' }
    ]
  },
  {
    id: 'image-rotator',
    slug: 'image-rotator',
    name: 'Image Rotator',
    category: 'image',
    shortDesc: 'Rotate photos 90°, 180°, 270°, or arbitrary angles effortlessly.',
    description: 'Fix sideways or upside-down smartphone photos instantly. Rotate clockwise, counterclockwise, or flip horizontally/vertically.',
    keywords: ['rotate photo', 'rotate image 90 degrees', 'turn photo', 'fix sideways picture'],
    popular: false,
    iconName: 'RotateCw',
    supportedFormats: 'JPG, PNG, WebP',
    howTo: [
      'Upload your image.',
      'Click 90° Clockwise or Counter-Clockwise until it is oriented correctly.',
      'Download your properly aligned photo.'
    ],
    faqs: [
      { question: 'Does rotation degrade image quality?', answer: 'Standard 90-degree rotations in our canvas engine preserve original pixel fidelity.' }
    ]
  },
  {
    id: 'image-flipper',
    slug: 'image-flipper',
    name: 'Image Flipper',
    category: 'image',
    shortDesc: 'Flip images horizontally (mirror effect) or vertically.',
    description: 'Mirror images for selfie corrections, reflections, or creative graphics without losing resolution.',
    keywords: ['flip image', 'mirror photo', 'horizontal flip', 'vertical flip'],
    popular: false,
    iconName: 'FlipHorizontal',
    supportedFormats: 'JPG, PNG, WebP',
    howTo: [
      'Load your picture.',
      'Select "Flip Horizontally" or "Flip Vertically".',
      'Download your mirrored file.'
    ],
    faqs: [
      { question: 'How is this different from rotating?', answer: 'Rotating turns the image along a pivot; flipping mirrors it across an axis.' }
    ]
  },
  {
    id: 'image-grayscale',
    slug: 'image-grayscale',
    name: 'Image Grayscale',
    category: 'image',
    shortDesc: 'Turn color photographs into timeless black-and-white images.',
    description: 'Apply high-contrast monochrome and grayscale luminance calculations to convert any photo into black and white.',
    keywords: ['black and white photo', 'grayscale image', 'monochrome filter', 'b&w converter'],
    popular: false,
    iconName: 'Moon',
    supportedFormats: 'JPG, PNG, WebP',
    howTo: [
      'Upload a color photo.',
      'Adjust grayscale intensity or contrast if desired.',
      'Click "Apply Grayscale" and save the black-and-white photo.'
    ],
    faqs: [
      { question: 'Can I reverse this process?', answer: 'Once saved, grayscale removes chroma data, so keep a copy of your original color file.' }
    ]
  },
  {
    id: 'image-brightness-adjuster',
    slug: 'image-brightness-adjuster',
    name: 'Image Brightness Adjuster',
    category: 'image',
    shortDesc: 'Brighten underexposed pictures or darken overly bright photos.',
    description: 'Adjust brightness with a live slider to salvage dark scenes or balance exposure.',
    keywords: ['brighten image', 'photo brightness', 'fix dark photo', 'lighten image'],
    popular: false,
    iconName: 'Sun',
    supportedFormats: 'JPG, PNG, WebP',
    howTo: [
      'Upload your photo.',
      'Slide the brightness control between -100% and +100%.',
      'Preview the real-time adjustment and download.'
    ],
    faqs: [
      { question: 'Does increasing brightness cause noise?', answer: 'Extreme brightness boosts can reveal camera sensor noise in shadowed areas.' }
    ]
  },
  {
    id: 'image-contrast-adjuster',
    slug: 'image-contrast-adjuster',
    name: 'Image Contrast Adjuster',
    category: 'image',
    shortDesc: 'Enhance contrast to make pictures punchy or soften shadows.',
    description: 'Boost dynamic range and color separation by adjusting the contrast curve directly on canvas pixels.',
    keywords: ['adjust contrast', 'photo contrast', 'enhance image punch', 'dynamic range adjuster'],
    popular: false,
    iconName: 'Sliders',
    supportedFormats: 'JPG, PNG, WebP',
    howTo: [
      'Drop your photo in.',
      'Move the contrast slider to intensify or soften tones.',
      'Export the finished result.'
    ],
    faqs: [
      { question: 'What is ideal contrast?', answer: 'A slight 10-20% boost often adds clarity to flat, washed-out images.' }
    ]
  },
  {
    id: 'image-quality-optimizer',
    slug: 'image-quality-optimizer',
    name: 'Image Quality Optimizer',
    category: 'image',
    shortDesc: 'Automatic balance of file size and visual fidelity for web publishing.',
    description: 'Strikes the optimal sweet spot between byte footprint and perceptual image sharpness for blazing-fast page loads.',
    keywords: ['image quality optimizer', 'web photo optimizer', 'optimize image for web'],
    popular: false,
    iconName: 'Sparkles',
    supportedFormats: 'JPG, PNG, WebP',
    howTo: [
      'Upload your web image.',
      'Choose an optimization preset (Web High, Balanced, Ultra-Light).',
      'Click Optimize and download.'
    ],
    faqs: [
      { question: 'Why optimize for web?', answer: 'Smaller images improve Google Core Web Vitals and lower mobile data consumption for visitors.' }
    ]
  },
  {
    id: 'image-format-converter',
    slug: 'image-format-converter',
    name: 'Image Format Converter',
    category: 'image',
    shortDesc: 'Universal image converter supporting JPG, PNG, WebP, and BMP.',
    description: 'Convert between any common web image formats in a single unified panel without needing heavy desktop software.',
    keywords: ['image format converter', 'convert image format', 'png to webp', 'jpg to webp'],
    popular: true,
    iconName: 'Repeat',
    supportedFormats: 'JPG, PNG, WebP, BMP',
    howTo: [
      'Select any source image.',
      'Choose the desired output format.',
      'Execute conversion and download.'
    ],
    faqs: [
      { question: 'Is batch conversion available?', answer: 'You can convert images consecutively with zero waiting queues.' }
    ]
  },
  {
    id: 'image-dimension-checker',
    slug: 'image-dimension-checker',
    name: 'Image Dimension Checker',
    category: 'image',
    shortDesc: 'Inspect exact width, height, aspect ratio, and megapixels of any picture.',
    description: 'Quickly find out resolution, aspect ratio (e.g. 16:9, 4:3), total megapixels, and orientation of any image file.',
    keywords: ['image dimension checker', 'find photo dimensions', 'check image resolution', 'aspect ratio calculator'],
    popular: false,
    iconName: 'Scan',
    supportedFormats: 'All image types',
    howTo: [
      'Select or drag any image file.',
      'View width, height, aspect ratio ratio, and megapixels instantly.'
    ],
    faqs: [
      { question: 'Are files sent over the internet?', answer: 'No, dimensions are read locally via browser Image element.' }
    ]
  },
  {
    id: 'image-file-size-checker',
    slug: 'image-file-size-checker',
    name: 'Image File Size Checker',
    category: 'image',
    shortDesc: 'Inspect exact byte size, KB, MB, and estimated 4G/3G load times.',
    description: 'Examine precise image weight in bytes, KB, and MB, with bandwidth simulation estimates.',
    keywords: ['image file size checker', 'check photo bytes', 'inspect image weight'],
    popular: false,
    iconName: 'HardDrive',
    supportedFormats: 'All image formats',
    howTo: [
      'Select an image to see its exact byte count and formatted file size.',
      'Compare against recommended web thresholds.'
    ],
    faqs: [
      { question: 'What is a good web image size?', answer: 'For standard web content, hero banners under 300KB and blog images under 100KB are recommended.' }
    ]
  },

  // --- PDF TOOLS (16 - 30) ---
  {
    id: 'pdf-merger',
    slug: 'pdf-merger',
    name: 'PDF Merger',
    category: 'pdf',
    shortDesc: 'Combine multiple PDF documents into a single organized file in seconds.',
    description: 'Merge multiple PDF files into one clean document. Reorder files before stitching them together securely in your browser.',
    keywords: ['merge pdf', 'combine pdf', 'join pdf documents', 'pdf stitcher'],
    popular: true,
    iconName: 'Layers',
    supportedFormats: 'PDF',
    howTo: [
      'Select or drop two or more PDF files.',
      'Arrange them in your preferred sequence.',
      'Click "Merge PDFs" to combine and download the compiled document.'
    ],
    faqs: [
      { question: 'Is there a limit on how many PDFs I can merge?', answer: 'You can merge multiple PDFs as long as your device has sufficient RAM.' },
      { question: 'Are my confidential documents uploaded?', answer: 'Never. PDF manipulation runs entirely on client-side WebAssembly and JS inside your browser.' }
    ]
  },
  {
    id: 'pdf-splitter',
    slug: 'pdf-splitter',
    name: 'PDF Splitter',
    category: 'pdf',
    shortDesc: 'Split a large PDF into individual pages or custom page ranges.',
    description: 'Separate single pages or extract continuous sections (e.g. pages 1-5, 8-12) into a standalone PDF file.',
    keywords: ['split pdf', 'separate pdf pages', 'cut pdf document'],
    popular: true,
    iconName: 'Scissors',
    supportedFormats: 'PDF',
    howTo: [
      'Upload the PDF document you want to split.',
      'Enter the target page numbers or ranges (e.g. 1-3, 5).',
      'Click "Split PDF" and download the new document.'
    ],
    faqs: [
      { question: 'Can I extract non-consecutive pages?', answer: 'Yes, comma-separated page numbers such as 1, 3, 5 are supported.' }
    ]
  },
  {
    id: 'pdf-page-extractor',
    slug: 'pdf-page-extractor',
    name: 'PDF Page Extractor',
    category: 'pdf',
    shortDesc: 'Extract specific pages from any PDF document quickly.',
    description: 'Isolate just the essential pages from a multi-page PDF manual, invoice, or legal contract and save them as a clean new PDF.',
    keywords: ['extract pdf pages', 'isolate pdf page', 'pull pages from pdf'],
    popular: false,
    iconName: 'FileMinus',
    supportedFormats: 'PDF',
    howTo: [
      'Upload your PDF.',
      'Select the specific page numbers to extract.',
      'Download your customized PDF containing only those pages.'
    ],
    faqs: [
      { question: 'Will hyperlinks inside the pages remain functional?', answer: 'Yes, embedded PDF links and annotations on extracted pages are preserved.' }
    ]
  },
  {
    id: 'pdf-compressor',
    slug: 'pdf-compressor',
    name: 'PDF Compressor',
    category: 'pdf',
    shortDesc: 'Reduce PDF file size for easy email sharing while keeping content sharp.',
    description: 'Re-encode and clean redundant object streams in PDF documents to reduce file size without corrupting fonts or layout.',
    keywords: ['compress pdf', 'reduce pdf size', 'shrink pdf for email'],
    popular: true,
    iconName: 'Minimize',
    supportedFormats: 'PDF',
    howTo: [
      'Select your PDF file.',
      'Click "Optimize & Compress PDF".',
      'Download the streamlined file.'
    ],
    faqs: [
      { question: 'How much smaller does it get?', answer: 'Documents with uncompressed streams or duplicate objects can shrink by 20% to 60%.' }
    ]
  },
  {
    id: 'pdf-to-jpg',
    slug: 'pdf-to-jpg',
    name: 'PDF to JPG',
    category: 'pdf',
    shortDesc: 'Convert PDF document pages into high-resolution JPG images.',
    description: 'Render pages of a PDF document directly onto canvas and export each page as a crisp JPG image.',
    keywords: ['pdf to jpg', 'convert pdf to image', 'save pdf as picture'],
    popular: true,
    iconName: 'FileImage',
    supportedFormats: 'PDF',
    howTo: [
      'Upload a PDF document.',
      'Preview pages and click "Render & Download JPG".',
      'Save the extracted page images.'
    ],
    faqs: [
      { question: 'Can I convert all pages?', answer: 'Yes, select individual pages or process all pages sequentially.' }
    ]
  },
  {
    id: 'jpg-to-pdf',
    slug: 'jpg-to-pdf',
    name: 'JPG to PDF',
    category: 'pdf',
    shortDesc: 'Convert one or more JPG photos into a formatted PDF document.',
    description: 'Turn smartphone receipts, scans, or photos into a clean, multi-page PDF document ready for printing or submission.',
    keywords: ['jpg to pdf', 'convert photo to pdf', 'images to pdf document'],
    popular: true,
    iconName: 'FilePlus',
    supportedFormats: 'JPG, JPEG',
    howTo: [
      'Upload your JPG images in order.',
      'Choose page orientation (Portrait or Landscape).',
      'Click "Generate PDF" and download.'
    ],
    faqs: [
      { question: 'Can I add multiple photos?', answer: 'Yes, each image is automatically placed on its own clean page in the PDF.' }
    ]
  },
  {
    id: 'pdf-page-counter',
    slug: 'pdf-page-counter',
    name: 'PDF Page Counter',
    category: 'pdf',
    shortDesc: 'Instantly count the total number of pages in any PDF document.',
    description: 'Upload any PDF file to inspect exact total page count, PDF version, and document structure without opening heavy viewer applications.',
    keywords: ['pdf page counter', 'count pages in pdf', 'how many pages in pdf'],
    popular: false,
    iconName: 'Hash',
    supportedFormats: 'PDF',
    howTo: [
      'Drop your PDF into the counter box.',
      'Instantly see total pages and document properties.'
    ],
    faqs: [
      { question: 'Does this work on password-protected PDFs?', answer: 'Unencrypted PDFs are analyzed immediately; encrypted files require entering the document password.' }
    ]
  },
  {
    id: 'pdf-metadata-viewer',
    slug: 'pdf-metadata-viewer',
    name: 'PDF Metadata Viewer',
    category: 'pdf',
    shortDesc: 'Inspect Title, Author, Subject, Creator software, and creation dates of a PDF.',
    description: 'View hidden metadata fields embedded inside PDF documents to verify origin, software producer, and modification timestamps.',
    keywords: ['pdf metadata viewer', 'check pdf author', 'inspect pdf properties'],
    popular: false,
    iconName: 'Info',
    supportedFormats: 'PDF',
    howTo: [
      'Select any PDF file.',
      'Review Title, Author, Producer, Creation Date, and Modification Date.'
    ],
    faqs: [
      { question: 'Can I edit metadata here?', answer: 'This tool is focused on fast, secure inspection of embedded fields.' }
    ]
  },
  {
    id: 'pdf-password-protection',
    slug: 'pdf-password-protection',
    name: 'PDF Password Protection',
    category: 'pdf',
    shortDesc: 'Secure your PDF documents with custom encryption instructions and passwords.',
    description: 'Understand how to safeguard confidential financial, legal, and personal PDF documents with client-side encryption options.',
    keywords: ['protect pdf', 'encrypt pdf', 'lock pdf with password'],
    popular: false,
    iconName: 'Lock',
    supportedFormats: 'PDF',
    howTo: [
      'Load your PDF file.',
      'Specify your security password and protection parameters.',
      'Download your protected document.'
    ],
    faqs: [
      { question: 'Can lost passwords be recovered?', answer: 'No, standard PDF encryption cannot be recovered without the original passphrase.' }
    ]
  },
  {
    id: 'pdf-unlock-tool',
    slug: 'pdf-unlock-tool',
    name: 'PDF Unlock Tool',
    category: 'pdf',
    shortDesc: 'Remove owner passwords and printing restrictions when authorized.',
    description: 'Provide your authorized document password to strip security restrictions for legitimate personal printing or editing.',
    keywords: ['unlock pdf', 'remove pdf password', 'decrypt pdf document'],
    popular: false,
    iconName: 'Unlock',
    supportedFormats: 'PDF',
    notice: 'Only use this tool on documents you own or have explicit legal authority to modify.',
    howTo: [
      'Upload the password-protected PDF document.',
      'Enter the correct current document password.',
      'Export a clean, restriction-free version of your document.'
    ],
    faqs: [
      { question: 'Will this bypass passwords without knowing the key?', answer: 'No, you must provide the authorized password to decrypt and re-save the document.' }
    ]
  },
  {
    id: 'pdf-text-extraction',
    slug: 'pdf-text-extraction',
    name: 'PDF Text Extraction',
    category: 'pdf',
    shortDesc: 'Extract copyable plain text and paragraphs from PDF files.',
    description: 'Extract raw text, paragraphs, and tables from digital PDF documents for easy copying, editing, or archiving.',
    keywords: ['extract text from pdf', 'pdf to text', 'copy text from pdf'],
    popular: true,
    iconName: 'FileText',
    supportedFormats: 'PDF',
    howTo: [
      'Upload any searchable PDF document.',
      'Click "Extract Text".',
      'Copy the extracted plain text or download it as a .txt file.'
    ],
    faqs: [
      { question: 'Does this work on scanned paper photocopies?', answer: 'For scanned picture-only PDFs, OCR is required. This tool extracts digital text layers directly.' }
    ]
  },
  {
    id: 'pdf-rotation-tool',
    slug: 'pdf-rotation-tool',
    name: 'PDF Rotation Tool',
    category: 'pdf',
    shortDesc: 'Permanently rotate upside-down or sideways PDF pages by 90°, 180°, or 270°.',
    description: 'Fix inverted or sideways PDF pages permanently so recipients view them correctly on all devices and PDF viewers.',
    keywords: ['rotate pdf', 'fix rotated pdf', 'turn pdf pages'],
    popular: false,
    iconName: 'RotateCw',
    supportedFormats: 'PDF',
    howTo: [
      'Upload your PDF document.',
      'Select whether to rotate all pages or only specific pages.',
      'Click 90° Clockwise or Counter-Clockwise and download.'
    ],
    faqs: [
      { question: 'Is the rotation saved permanently?', answer: 'Yes, the downloaded PDF will have the updated orientation flag encoded permanently.' }
    ]
  },
  {
    id: 'pdf-page-reordering',
    slug: 'pdf-page-reordering',
    name: 'PDF Page Reordering',
    category: 'pdf',
    shortDesc: 'Rearrange and reorder pages of a PDF document into any desired order.',
    description: 'Reorganize page order in reports, resumes, and packets. Input your desired page order to generate a newly sequenced PDF.',
    keywords: ['reorder pdf pages', 'rearrange pdf', 'organize pdf sequence'],
    popular: false,
    iconName: 'ListOrdered',
    supportedFormats: 'PDF',
    howTo: [
      'Upload your multi-page PDF.',
      'Specify the new sequence order (e.g. 3, 1, 2, 4).',
      'Save the reordered PDF file.'
    ],
    faqs: [
      { question: 'Can I omit pages while reordering?', answer: 'Yes, pages not listed in your sequence will simply be excluded from the new file.' }
    ]
  },
  {
    id: 'pdf-to-png',
    slug: 'pdf-to-png',
    name: 'PDF to PNG',
    category: 'pdf',
    shortDesc: 'Export PDF pages as crisp, lossless PNG graphic images.',
    description: 'Convert PDF document pages into lossless PNG images with sharp text and diagram preservation.',
    keywords: ['pdf to png', 'save pdf as png', 'convert document to png'],
    popular: false,
    iconName: 'Image',
    supportedFormats: 'PDF',
    howTo: [
      'Upload your PDF document.',
      'Select the page you wish to render.',
      'Download the lossless PNG graphic.'
    ],
    faqs: [
      { question: 'Why choose PNG over JPG for PDFs?', answer: 'PNG preserves sharp text edges and vector line diagrams without JPEG artifacts.' }
    ]
  },
  {
    id: 'images-to-pdf',
    slug: 'images-to-pdf',
    name: 'Images to PDF',
    category: 'pdf',
    shortDesc: 'Bundle multiple PNG, JPG, and WebP images into a single unified PDF.',
    description: 'Assemble a collection of screenshots, document photos, or design mockups into a single organized PDF document.',
    keywords: ['images to pdf', 'combine pictures into pdf', 'photos to pdf'],
    popular: true,
    iconName: 'FolderPlus',
    supportedFormats: 'JPG, PNG, WebP',
    howTo: [
      'Select multiple image files at once.',
      'Review and organize the order of your pages.',
      'Click "Compile into PDF" and download.'
    ],
    faqs: [
      { question: 'Can I mix JPG and PNG files?', answer: 'Yes, the compiler seamlessly processes both formats in the same document.' }
    ]
  },

  // --- TEXT TOOLS (31 - 50) ---
  {
    id: 'word-counter',
    slug: 'word-counter',
    name: 'Word Counter',
    category: 'text',
    shortDesc: 'Count words, characters, sentences, paragraphs, and reading time in real-time.',
    description: 'A comprehensive live word counter and text analytics tool. Measure word density, character count with and without spaces, reading duration, and speaking pace.',
    keywords: ['word counter', 'count words', 'essay word count', 'character count'],
    popular: true,
    iconName: 'FileText',
    howTo: [
      'Type or paste your text into the editor.',
      'Stats update instantly in real-time as you write.',
      'Copy your text or clear with one click.'
    ],
    faqs: [
      { question: 'How is reading time calculated?', answer: 'Based on the standard average adult reading speed of 200 words per minute.' }
    ]
  },
  {
    id: 'character-counter',
    slug: 'character-counter',
    name: 'Character Counter',
    category: 'text',
    shortDesc: 'Count total characters with and without whitespace for social limits.',
    description: 'Perfect for drafting tweets, meta descriptions, headlines, and SMS text messages where character limits matter.',
    keywords: ['character counter', 'letter count', 'tweet character count', 'meta description counter'],
    popular: true,
    iconName: 'Type',
    howTo: [
      'Paste your content into the box.',
      'View total characters, characters excluding spaces, and remaining capacity for standard platforms.'
    ],
    faqs: [
      { question: 'Does this count emojis?', answer: 'Yes, emojis are counted according to Unicode standard code points.' }
    ]
  },
  {
    id: 'sentence-counter',
    slug: 'sentence-counter',
    name: 'Sentence Counter',
    category: 'text',
    shortDesc: 'Count exact sentences and average sentence length in your writing.',
    description: 'Detect sentence boundaries marked by periods, question marks, and exclamation points to assess readability.',
    keywords: ['sentence counter', 'count sentences', 'readability checker'],
    popular: false,
    iconName: 'ListFilter',
    howTo: ['Input text to view total sentence count and average words per sentence.'],
    faqs: [{ question: 'What is a good sentence length?', answer: 'Writing experts recommend 14-18 words per sentence for optimal comprehension.' }]
  },
  {
    id: 'paragraph-counter',
    slug: 'paragraph-counter',
    name: 'Paragraph Counter',
    category: 'text',
    shortDesc: 'Measure paragraphs, line breaks, and block density in essays and articles.',
    description: 'Accurately counts text blocks separated by double line breaks for essay grading and structural formatting.',
    keywords: ['paragraph counter', 'count paragraphs', 'essay analyzer'],
    popular: false,
    iconName: 'Pilcrow',
    howTo: ['Type or paste text to track paragraphs.'],
    faqs: [{ question: 'Do empty lines count as paragraphs?', answer: 'No, empty whitespace lines are automatically excluded.' }]
  },
  {
    id: 'reading-time-calculator',
    slug: 'reading-time-calculator',
    name: 'Reading Time Calculator',
    category: 'text',
    shortDesc: 'Estimate silent reading and spoken presentation times for speeches and articles.',
    description: 'Calculate how long readers will spend on your blog post or how many minutes your conference presentation will take.',
    keywords: ['reading time calculator', 'speech time calculator', 'words to minutes'],
    popular: true,
    iconName: 'Clock',
    howTo: ['Paste your article or speech script to calculate duration in minutes and seconds.'],
    faqs: [{ question: 'What speaking speed is used?', answer: 'Spoken speech is estimated at 130 words per minute; silent reading at 200 wpm.' }]
  },
  {
    id: 'text-case-converter',
    slug: 'text-case-converter',
    name: 'Text Case Converter',
    category: 'text',
    shortDesc: 'Switch text between UPPERCASE, lowercase, Title Case, camelCase, and snake_case.',
    description: 'Easily transform any text snippet into various letter case styles with a single click.',
    keywords: ['case converter', 'text case converter', 'uppercase to lowercase', 'camelcase converter'],
    popular: true,
    iconName: 'CaseSensitive',
    howTo: ['Enter text and click any of the case buttons to convert immediately.'],
    faqs: [{ question: 'Can I copy the converted text?', answer: 'Yes, click "Copy Result" to put the converted string straight onto your clipboard.' }]
  },
  {
    id: 'uppercase-converter',
    slug: 'uppercase-converter',
    name: 'Uppercase Converter',
    category: 'text',
    shortDesc: 'Quickly convert all letters in your text into CAPITAL LETTERS.',
    description: 'Transform any text block into full UPPERCASE capital letters without affecting punctuation or numerals.',
    keywords: ['uppercase converter', 'capital letters converter', 'all caps tool'],
    popular: false,
    iconName: 'ChevronsUp',
    howTo: ['Paste your text and copy the all-caps version.'],
    faqs: [{ question: 'Does this handle accented characters?', answer: 'Yes, full Unicode uppercase transformations (e.g. é -> É) are supported.' }]
  },
  {
    id: 'lowercase-converter',
    slug: 'lowercase-converter',
    name: 'Lowercase Converter',
    category: 'text',
    shortDesc: 'Convert capital or mixed-case text entirely into small lowercase letters.',
    description: 'Normalize mixed-case email lists, usernames, or messy copy into uniform lowercase characters.',
    keywords: ['lowercase converter', 'small letters converter', 'make text lowercase'],
    popular: false,
    iconName: 'ChevronsDown',
    howTo: ['Paste your text and retrieve the lowercase result.'],
    faqs: [{ question: 'Does this modify numbers?', answer: 'No, numbers and symbols remain untouched.' }]
  },
  {
    id: 'title-case-converter',
    slug: 'title-case-converter',
    name: 'Title Case Converter',
    category: 'text',
    shortDesc: 'Capitalize article and blog titles following standard editorial style guides.',
    description: 'Capitalizes principal words while keeping minor words (a, an, the, in, on, of) lowercase according to grammar standards.',
    keywords: ['title case converter', 'headline capitalizer', 'capitalize titles'],
    popular: true,
    iconName: 'Heading',
    howTo: ['Enter your headline and copy the formatted title case string.'],
    faqs: [{ question: 'Which style guide does it follow?', answer: 'It applies standard AP/Chicago headline capitalization conventions.' }]
  },
  {
    id: 'remove-extra-spaces',
    slug: 'remove-extra-spaces',
    name: 'Remove Extra Spaces',
    category: 'text',
    shortDesc: 'Strip duplicate spaces, tabs, and trailing whitespace from text.',
    description: 'Clean up ragged copy copied from PDFs, emails, or spreadsheets by collapsing repeated spaces into single clean spaces.',
    keywords: ['remove extra spaces', 'clean whitespace', 'strip spaces', 'remove double spaces'],
    popular: false,
    iconName: 'Space',
    howTo: ['Paste your messy text and click "Remove Spaces".'],
    faqs: [{ question: 'Does it remove paragraph breaks?', answer: 'It preserves valid line breaks while collapsing internal repeated spaces.' }]
  },
  {
    id: 'remove-duplicate-lines',
    slug: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    category: 'text',
    shortDesc: 'Deduplicate email lists, URLs, and data rows with case sensitivity options.',
    description: 'Strip out duplicate lines from large text files and lists. Keep only unique items with optional case matching.',
    keywords: ['remove duplicate lines', 'deduplicate list', 'unique lines filter'],
    popular: true,
    iconName: 'Filter',
    howTo: ['Paste your list (one item per line) and click "Deduplicate Lines".'],
    faqs: [{ question: 'Does it preserve original order?', answer: 'Yes, the first occurrence of each unique line is kept in place.' }]
  },
  {
    id: 'sort-lines',
    slug: 'sort-lines',
    name: 'Sort Lines',
    category: 'text',
    shortDesc: 'Sort lists alphabetically (A-Z or Z-A), numerically, or by line length.',
    description: 'Quickly organize alphabetical lists, bibliographies, numbers, or terms in ascending or descending sequence.',
    keywords: ['sort lines', 'alphabetize list', 'sort a-z', 'sort by length'],
    popular: false,
    iconName: 'ArrowUpDown',
    howTo: ['Paste items, choose your sorting rule (A-Z, Z-A, Natural Numerical, Length), and view sorted output.'],
    faqs: [{ question: 'Can it sort numbers properly?', answer: 'Yes, natural numerical sorting ensures "10" comes after "2" instead of after "1".' }]
  },
  {
    id: 'reverse-text',
    slug: 'reverse-text',
    name: 'Reverse Text',
    category: 'text',
    shortDesc: 'Reverse entire text strings, words, or individual lines backwards.',
    description: 'Flip entire sentences letter-by-letter, reverse word sequence, or flip line order from bottom to top.',
    keywords: ['reverse text', 'backwards text', 'flip words', 'mirror text'],
    popular: false,
    iconName: 'Undo2',
    howTo: ['Enter text, select your reversal mode (Reverse Characters, Reverse Words, Reverse Lines), and copy.'],
    faqs: [{ question: 'What is this used for?', answer: 'Commonly used in puzzles, coding challenges, cryptography checks, and creative styling.' }]
  },
  {
    id: 'text-cleaner',
    slug: 'text-cleaner',
    name: 'Text Cleaner',
    category: 'text',
    shortDesc: 'All-in-one cleaner: remove HTML tags, control codes, weird symbols, and blank lines.',
    description: 'Strip raw HTML markup, carriage returns, invisible zero-width spaces, and broken encoding artifacts in one step.',
    keywords: ['text cleaner', 'strip html tags', 'sanitize text', 'remove special characters'],
    popular: true,
    iconName: 'Sparkles',
    howTo: ['Paste messy copy, toggle desired filters (Strip HTML, Strip Symbols, Collapse Spaces), and clean.'],
    faqs: [{ question: 'Will this strip script tags?', answer: 'Yes, all HTML and XML markup tags are cleanly stripped.' }]
  },
  {
    id: 'find-and-replace',
    slug: 'find-and-replace',
    name: 'Find and Replace',
    category: 'text',
    shortDesc: 'Batch replace words, phrases, or regex patterns with live match highlights.',
    description: 'Search and substitute occurrences of text or regular expressions across multi-page documents instantly.',
    keywords: ['find and replace', 'search and replace text', 'batch replace words'],
    popular: true,
    iconName: 'Search',
    howTo: ['Enter your text, provide search query and replacement text, and view updated output.'],
    faqs: [{ question: 'Is Regex supported?', answer: 'Yes, toggle the Regex option to use standard JavaScript regular expressions.' }]
  },
  {
    id: 'text-to-slug-converter',
    slug: 'text-to-slug-converter',
    name: 'Text to Slug Converter',
    category: 'text',
    shortDesc: 'Generate clean, URL-friendly kebab-case slugs from article headlines.',
    description: 'Transform article titles into SEO-friendly, URL-safe slugs with lowercase letters, hyphens, and stripped punctuation.',
    keywords: ['text to slug', 'url slug generator', 'permalink creator', 'kebab case'],
    popular: true,
    iconName: 'Link',
    howTo: ['Enter any headline or post title to generate an instant clean URL slug.'],
    faqs: [{ question: 'Are special characters stripped?', answer: 'Yes, accents are transliterated and symbols are replaced with clean hyphens.' }]
  },
  {
    id: 'lorem-ipsum-generator',
    slug: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator',
    category: 'text',
    shortDesc: 'Generate placeholder dummy text by paragraphs, sentences, or word counts.',
    description: 'Create authentic classical Latin placeholder text for website mockups, layouts, graphic designs, and typography tests.',
    keywords: ['lorem ipsum generator', 'dummy text', 'placeholder text', 'latin text generator'],
    popular: true,
    iconName: 'FileQuestion',
    howTo: ['Choose quantity (paragraphs, sentences, or words), select optional "Start with Lorem ipsum", and copy.'],
    faqs: [{ question: 'Where does Lorem Ipsum come from?', answer: 'It is derived from sections of Cicero’s 45 BC philosophical treatise "De Finibus Bonorum et Malorum".' }]
  },
  {
    id: 'text-repeater',
    slug: 'text-repeater',
    name: 'Text Repeater',
    category: 'text',
    shortDesc: 'Repeat any string or phrase N times with custom separators.',
    description: 'Repeat a phrase, emoji, or pattern up to 5,000 times with optional spaces, newlines, or custom punctuation between iterations.',
    keywords: ['text repeater', 'repeat words', 'duplicate string', 'loop text'],
    popular: false,
    iconName: 'Repeat1',
    howTo: ['Enter your word, specify count, choose a delimiter (comma, space, newline), and generate.'],
    faqs: [{ question: 'Is there a limit?', answer: 'To maintain browser responsiveness, repetitions are capped at 5,000 instances per run.' }]
  },
  {
    id: 'line-break-remover',
    slug: 'line-break-remover',
    name: 'Line Break Remover',
    category: 'text',
    shortDesc: 'Turn broken lines and unwanted returns into continuous paragraphs.',
    description: 'Fix annoying hard line breaks caused by copying text from narrow PDF columns or legacy email software.',
    keywords: ['remove line breaks', 'strip newlines', 'unbreak text', 'join lines'],
    popular: false,
    iconName: 'WrapText',
    howTo: ['Paste broken text and convert it to smooth flowing paragraphs.'],
    faqs: [{ question: 'Does it preserve paragraph separations?', answer: 'Yes, you can choose to preserve double line breaks while removing single breaks.' }]
  },
  {
    id: 'text-length-calculator',
    slug: 'text-length-calculator',
    name: 'Text Length Calculator',
    category: 'text',
    shortDesc: 'Check text size in bytes, UTF-8 storage footprint, words, and characters.',
    description: 'Calculates exact memory and storage bytes needed for string data in ASCII, UTF-8, and UTF-16 encodings.',
    keywords: ['text length calculator', 'string byte size', 'utf8 byte counter'],
    popular: false,
    iconName: 'Calculator',
    howTo: ['Input text to see memory size in Bytes, Kilobytes, characters, and code units.'],
    faqs: [{ question: 'Why does byte size differ from character count?', answer: 'Non-ASCII characters like emojis and accented glyphs take 2 to 4 bytes each in UTF-8 encoding.' }]
  },

  // --- CALCULATORS (51 - 70) ---
  {
    id: 'age-calculator',
    slug: 'age-calculator',
    name: 'Age Calculator',
    category: 'calculator',
    shortDesc: 'Calculate exact age in years, months, days, hours, and minutes from birth date.',
    description: 'Find out precisely how old someone or something is down to the exact day, including upcoming birthday countdowns.',
    keywords: ['age calculator', 'calculate age', 'how old am i', 'birthday calculator'],
    popular: true,
    iconName: 'Calendar',
    howTo: ['Select date of birth and reference date (default today) to see exact age breakdown.'],
    faqs: [{ question: 'Does it account for leap years?', answer: 'Yes, leap years and variable month lengths (28, 29, 30, 31 days) are calculated accurately.' }]
  },
  {
    id: 'percentage-calculator',
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    category: 'calculator',
    shortDesc: 'Solve any percentage problem: X% of Y, percentage increase/decrease, or ratio.',
    description: 'Solve common percentage math scenarios effortlessly: find percentage of a number, percentage change, and what percentage one number is of another.',
    keywords: ['percentage calculator', 'calculate percent', 'percent increase', 'percentage change'],
    popular: true,
    iconName: 'Percent',
    howTo: ['Choose your calculation scenario, input your numbers, and get instant answers.'],
    faqs: [{ question: 'How do I calculate percent increase?', answer: 'Subtract initial value from final value, divide by initial value, and multiply by 100.' }]
  },
  {
    id: 'average-calculator',
    slug: 'average-calculator',
    name: 'Average Calculator',
    category: 'calculator',
    shortDesc: 'Calculate Mean, Median, Mode, Range, and Standard Deviation of number sets.',
    description: 'Enter a comma- or space-separated list of numbers to instantly compute statistical averages, sum, count, and dispersion.',
    keywords: ['average calculator', 'mean median mode', 'calculate average', 'statistics calculator'],
    popular: false,
    iconName: 'BarChart2',
    howTo: ['Enter numbers separated by commas or spaces and review statistics.'],
    faqs: [{ question: 'What is the difference between Mean and Median?', answer: 'Mean is the numerical sum divided by count; Median is the middle value when sorted.' }]
  },
  {
    id: 'discount-calculator',
    slug: 'discount-calculator',
    name: 'Discount Calculator',
    category: 'calculator',
    shortDesc: 'Compute final sale price, amount saved, and taxes on discounted items.',
    description: 'Quickly find the final price of clothing, electronics, or goods on sale with percentage discounts and optional sales tax.',
    keywords: ['discount calculator', 'sale price calculator', 'how much do i save', 'markdown calculator'],
    popular: true,
    iconName: 'Tag',
    howTo: ['Enter original price, discount percentage (e.g. 25%), and optional tax rate to see net savings and total.'],
    faqs: [{ question: 'Can I apply stacked discounts?', answer: 'You can combine percentage markdown with fixed coupons.' }]
  },
  {
    id: 'profit-margin-calculator',
    slug: 'profit-margin-calculator',
    name: 'Profit Margin Calculator',
    category: 'calculator',
    shortDesc: 'Calculate gross margin percentage, markup percentage, and net profit.',
    description: 'Essential business tool for entrepreneurs and retailers to determine optimal selling prices, gross margins, and markups.',
    keywords: ['profit margin calculator', 'markup calculator', 'gross margin', 'calculate profit'],
    popular: false,
    iconName: 'TrendingUp',
    howTo: ['Enter cost of goods (COGS) and selling price (or target margin) to calculate revenue metrics.'],
    faqs: [{ question: 'How does margin differ from markup?', answer: 'Margin is profit divided by revenue; markup is profit divided by wholesale cost.' }]
  },
  {
    id: 'simple-interest-calculator',
    slug: 'simple-interest-calculator',
    name: 'Simple Interest Calculator',
    category: 'calculator',
    shortDesc: 'Calculate simple interest earnings and total maturity balance (I = P × r × t).',
    description: 'Determine exact interest accrued on short-term deposits, personal loans, and promissory notes.',
    keywords: ['simple interest calculator', 'calculate interest', 'interest formula'],
    popular: false,
    iconName: 'DollarSign',
    howTo: ['Input principal amount, annual interest rate (%), and time period in years/months.'],
    faqs: [{ question: 'What is the simple interest formula?', answer: 'Interest = Principal × Rate × Time.' }]
  },
  {
    id: 'compound-interest-calculator',
    slug: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    category: 'calculator',
    shortDesc: 'Visualize long-term investment growth with monthly compounding and contributions.',
    description: 'Model future wealth accumulation, 401(k) retirement funds, and index fund compound growth over 1 to 50 years.',
    keywords: ['compound interest calculator', 'investment growth', 'wealth compounder', 'future value'],
    popular: true,
    iconName: 'LineChart',
    howTo: ['Enter starting principal, annual interest rate, years to grow, and compounding frequency.'],
    faqs: [{ question: 'What makes compounding powerful?', answer: 'You earn interest not just on your initial principal, but also on previously accumulated interest.' }]
  },
  {
    id: 'tip-calculator',
    slug: 'tip-calculator',
    name: 'Tip Calculator',
    category: 'calculator',
    shortDesc: 'Calculate restaurant tips and split the bill evenly among friends.',
    description: 'Fast and courteous dining calculator. Choose standard tip percentages (15%, 18%, 20%, 25%) and split totals between 1 to 50 guests.',
    keywords: ['tip calculator', 'split bill', 'restaurant tip', 'gratuity calculator'],
    popular: true,
    iconName: 'Coins',
    howTo: ['Enter bill total, choose tip %, specify number of people, and view individual contributions.'],
    faqs: [{ question: 'Is tip calculated before or after tax?', answer: 'Traditionally etiquette suggests tipping on the pre-tax food and beverage subtotal.' }]
  },
  {
    id: 'loan-payment-calculator',
    slug: 'loan-payment-calculator',
    name: 'Loan Payment Calculator',
    category: 'calculator',
    shortDesc: 'Estimate monthly mortgage, auto, or personal loan payments and total interest.',
    description: 'Calculate monthly amortization, principal breakdown, and total cost of borrowing for mortgages, vehicles, and student loans.',
    keywords: ['loan calculator', 'mortgage payment calculator', 'emi calculator', 'car loan calculator'],
    popular: true,
    iconName: 'CreditCard',
    howTo: ['Enter loan amount, interest rate (APR %), and repayment term in years or months.'],
    faqs: [{ question: 'What does EMI stand for?', answer: 'Equated Monthly Installment — the fixed payment amount made by a borrower to a lender each month.' }]
  },
  {
    id: 'date-difference-calculator',
    slug: 'date-difference-calculator',
    name: 'Date Difference Calculator',
    category: 'calculator',
    shortDesc: 'Find the exact number of days, weeks, and months between two dates.',
    description: 'Calculate elapsed days between two dates, project deadlines, holiday countdowns, or tenure.',
    keywords: ['date difference calculator', 'days between dates', 'how many days until'],
    popular: false,
    iconName: 'CalendarRange',
    howTo: ['Select start date and end date to get total days, working days, and week counts.'],
    faqs: [{ question: 'Can it exclude weekends?', answer: 'Yes, view both calendar days and approximate business days.' }]
  },
  {
    id: 'time-difference-calculator',
    slug: 'time-difference-calculator',
    name: 'Time Difference Calculator',
    category: 'calculator',
    shortDesc: 'Calculate elapsed hours and minutes between two timestamps.',
    description: 'Ideal for timesheet tracking, shift workers, flight logs, and project billing hours.',
    keywords: ['time difference calculator', 'hours between times', 'calculate work hours'],
    popular: false,
    iconName: 'Clock',
    howTo: ['Select starting time and ending time to compute total hours and minutes.'],
    faqs: [{ question: 'Does it support overnight shifts crossing midnight?', answer: 'Yes, if end time is earlier than start time, it calculates across midnight automatically.' }]
  },
  {
    id: 'gst-calculator',
    slug: 'gst-calculator',
    name: 'GST Calculator',
    category: 'calculator',
    shortDesc: 'Calculate Goods & Services Tax (GST) inclusive and exclusive amounts.',
    description: 'Quickly add or subtract GST at standard rates (e.g., 5%, 12%, 18%, 28%) for business invoices and receipts.',
    keywords: ['gst calculator', 'calculate gst', 'gst inclusive', 'gst exclusive'],
    popular: false,
    iconName: 'Receipt',
    howTo: ['Enter base amount, select or input GST rate (%), and toggle "Add GST" or "Remove GST".'],
    faqs: [{ question: 'What is GST exclusive vs inclusive?', answer: 'Exclusive means tax is added to base price; inclusive means base price already includes the tax.' }]
  },
  {
    id: 'vat-calculator',
    slug: 'vat-calculator',
    name: 'VAT Calculator',
    category: 'calculator',
    shortDesc: 'Calculate Value Added Tax (VAT) with custom tax rates.',
    description: 'Designed for international commerce, calculate net amounts, VAT gross, and gross-to-net reverse taxation.',
    keywords: ['vat calculator', 'value added tax', 'calculate vat', 'vat refund'],
    popular: false,
    iconName: 'FileCheck2',
    howTo: ['Enter price, specify VAT percentage (e.g. 20%), and calculate net/gross values.'],
    faqs: [{ question: 'How is VAT removed from a gross price?', answer: 'Divide gross price by (1 + VAT rate / 100).' }]
  },
  {
    id: 'fraction-calculator',
    slug: 'fraction-calculator',
    name: 'Fraction Calculator',
    category: 'calculator',
    shortDesc: 'Add, subtract, multiply, and divide fractions with step-by-step simplification.',
    description: 'Solve operations between proper fractions, improper fractions, and mixed numbers with reduced lowest terms.',
    keywords: ['fraction calculator', 'add fractions', 'simplify fraction', 'math fraction solver'],
    popular: false,
    iconName: 'Divide',
    howTo: ['Input numerator and denominator for both fractions, pick an operation (+, -, ×, ÷), and solve.'],
    faqs: [{ question: 'Does it reduce to simplest form?', answer: 'Yes, the greatest common divisor (GCD) is used to simplify the answer automatically.' }]
  },
  {
    id: 'ratio-calculator',
    slug: 'ratio-calculator',
    name: 'Ratio Calculator',
    category: 'calculator',
    shortDesc: 'Simplify ratios (A:B) and solve for unknown values in proportions (A:B = C:D).',
    description: 'Solve missing values in aspect ratios, recipe scaling, architectural models, and screen dimensions.',
    keywords: ['ratio calculator', 'simplify ratio', 'solve proportion', 'aspect ratio solver'],
    popular: false,
    iconName: 'Scale',
    howTo: ['Input known terms in the ratio proportion to solve for the missing variable X.'],
    faqs: [{ question: 'How do you simplify a ratio?', answer: 'Divide all terms in the ratio by their greatest common factor.' }]
  },
  {
    id: 'square-root-calculator',
    slug: 'square-root-calculator',
    name: 'Square Root Calculator',
    category: 'calculator',
    shortDesc: 'Calculate square root (√), cube root (∛), and nth roots of any number.',
    description: 'Find real square roots, cube roots, and arbitrary nth roots with high precision.',
    keywords: ['square root calculator', 'calculate square root', 'cube root calculator', 'nth root'],
    popular: false,
    iconName: 'Radical',
    howTo: ['Enter number and root degree (default 2 for square root) to compute.'],
    faqs: [{ question: 'Can negative numbers have square roots?', answer: 'In real numbers, negative numbers do not have real square roots (they yield imaginary numbers).' }]
  },
  {
    id: 'scientific-calculator',
    slug: 'scientific-calculator',
    name: 'Scientific Calculator',
    category: 'calculator',
    shortDesc: 'Trigonometry (sin, cos, tan), logarithms, exponents, powers, and factorials.',
    description: 'Full-featured online scientific calculator for engineering, algebra, physics, and university math coursework.',
    keywords: ['scientific calculator', 'online scientific calculator', 'trig calculator', 'sin cos tan'],
    popular: true,
    iconName: 'Cpu',
    howTo: ['Use keypad or keyboard to enter complex mathematical expressions and evaluate.'],
    faqs: [{ question: 'Are angles in degrees or radians?', answer: 'You can toggle between DEG and RAD modes anytime.' }]
  },
  {
    id: 'bmi-calculator',
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    category: 'calculator',
    shortDesc: 'Calculate Body Mass Index (BMI) using metric or imperial units.',
    description: 'Compute Body Mass Index according to World Health Organization (WHO) adult categories.',
    keywords: ['bmi calculator', 'body mass index', 'calculate bmi', 'healthy weight range'],
    popular: true,
    iconName: 'Activity',
    notice: 'Informational use only. BMI does not diagnose body fat percentage or clinical health. Consult a physician for medical advice.',
    howTo: ['Select Metric (cm/kg) or Imperial (feet/inches/lbs), enter values, and view BMI category.'],
    faqs: [{ question: 'What is a normal BMI range?', answer: 'WHO defines 18.5 to 24.9 as the normal adult weight range.' }]
  },
  {
    id: 'bmr-calculator',
    slug: 'bmr-calculator',
    name: 'BMR Calculator',
    category: 'calculator',
    shortDesc: 'Calculate Basal Metabolic Rate using the Mifflin-St Jeor formula.',
    description: 'Estimate baseline calories burned at complete rest to plan weight maintenance, deficit, or surplus.',
    keywords: ['bmr calculator', 'basal metabolic rate', 'calories burned at rest'],
    popular: false,
    iconName: 'Flame',
    notice: 'Informational estimate only. Not medical or dietary prescription.',
    howTo: ['Enter gender, age, height, and weight to calculate basal daily calorie expenditure.'],
    faqs: [{ question: 'What is BMR?', answer: 'Basal Metabolic Rate is the calories your body needs simply to maintain vital organs at rest.' }]
  },
  {
    id: 'calorie-calculator',
    slug: 'calorie-calculator',
    name: 'Calorie Calculator',
    category: 'calculator',
    shortDesc: 'Estimate daily calorie requirements for weight loss, maintenance, or gain.',
    description: 'Combines BMR with activity level multipliers (sedentary, moderate, active) to estimate total daily energy expenditure (TDEE).',
    keywords: ['calorie calculator', 'daily calorie needs', 'tdee calculator', 'weight loss calories'],
    popular: true,
    iconName: 'HeartPulse',
    notice: 'Informational only. Always consult a certified healthcare professional before starting strict dietary regimens.',
    howTo: ['Input personal metrics and choose your physical activity tier to view target calories.'],
    faqs: [{ question: 'What is TDEE?', answer: 'Total Daily Energy Expenditure is the total amount of calories burned throughout 24 hours including exercise and daily movement.' }]
  },

  // --- CONVERTERS (71 - 80) ---
  {
    id: 'length-converter',
    slug: 'length-converter',
    name: 'Length Converter',
    category: 'converter',
    shortDesc: 'Convert between Meters, Kilometers, Feet, Inches, Miles, Yards, and Centimeters.',
    description: 'Instant bilateral distance and length converter supporting imperial and metric units.',
    keywords: ['length converter', 'meters to feet', 'inches to cm', 'miles to km'],
    popular: true,
    iconName: 'Ruler',
    howTo: ['Enter value, pick source unit, pick target unit, and get instant precision conversion.'],
    faqs: [{ question: 'How many centimeters are in an inch?', answer: 'Exactly 2.54 centimeters per international definition.' }]
  },
  {
    id: 'weight-converter',
    slug: 'weight-converter',
    name: 'Weight Converter',
    category: 'converter',
    shortDesc: 'Convert between Kilograms, Grams, Pounds (lbs), Ounces (oz), and Stones.',
    description: 'Accurately convert mass and weight measurements for shipping, cooking, science, and fitness.',
    keywords: ['weight converter', 'kg to lbs', 'pounds to kilograms', 'grams to ounces'],
    popular: true,
    iconName: 'Scale',
    howTo: ['Enter weight, select units, and read conversion.'],
    faqs: [{ question: 'How many pounds are in a kilogram?', answer: 'Approximately 2.20462 pounds.' }]
  },
  {
    id: 'temperature-converter',
    slug: 'temperature-converter',
    name: 'Temperature Converter',
    category: 'converter',
    shortDesc: 'Convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K).',
    description: 'Interactive temperature scale conversions with exact scientific formulas.',
    keywords: ['temperature converter', 'celsius to fahrenheit', 'f to c', 'kelvin converter'],
    popular: true,
    iconName: 'Thermometer',
    howTo: ['Enter temperature in any field to see synchronous conversion across all scales.'],
    faqs: [{ question: 'What is absolute zero?', answer: '0 Kelvin, which equals -273.15° Celsius or -459.67° Fahrenheit.' }]
  },
  {
    id: 'area-converter',
    slug: 'area-converter',
    name: 'Area Converter',
    category: 'converter',
    shortDesc: 'Convert Square Feet, Square Meters, Acres, Hectares, and Square Kilometers.',
    description: 'Essential for real estate, landscaping, interior design, and agriculture land measurements.',
    keywords: ['area converter', 'sq ft to sq meters', 'acres to hectares', 'square feet converter'],
    popular: false,
    iconName: 'Grid',
    howTo: ['Enter area value and toggle unit selections.'],
    faqs: [{ question: 'How many square feet are in an acre?', answer: 'There are exactly 43,560 square feet in one acre.' }]
  },
  {
    id: 'volume-converter',
    slug: 'volume-converter',
    name: 'Volume Converter',
    category: 'converter',
    shortDesc: 'Convert Liters, Milliliters, Gallons, Quarts, Pints, Cups, and Fluid Ounces.',
    description: 'Kitchen recipes, liquid volume, fuel calculations, and fluid capacity conversions.',
    keywords: ['volume converter', 'liters to gallons', 'milliliters to cups', 'fluid ounces converter'],
    popular: false,
    iconName: 'Box',
    howTo: ['Choose liquid volume units and enter your quantity.'],
    faqs: [{ question: 'How many milliliters in a US cup?', answer: 'One standard US cup is approximately 236.588 milliliters.' }]
  },
  {
    id: 'speed-converter',
    slug: 'speed-converter',
    name: 'Speed Converter',
    category: 'converter',
    shortDesc: 'Convert Miles Per Hour (mph), Kilometers Per Hour (km/h), Knots, and m/s.',
    description: 'Convert travel velocity, vehicle speeds, aviation knots, and wind speeds.',
    keywords: ['speed converter', 'mph to kmh', 'knots to mph', 'meters per second'],
    popular: false,
    iconName: 'Gauge',
    howTo: ['Input speed and choose source and target speed units.'],
    faqs: [{ question: 'What is a knot in nautical speed?', answer: 'One nautical knot is one nautical mile per hour (approximately 1.15078 mph or 1.852 km/h).' }]
  },
  {
    id: 'time-converter',
    slug: 'time-converter',
    name: 'Time Converter',
    category: 'converter',
    shortDesc: 'Convert Milliseconds, Seconds, Minutes, Hours, Days, Weeks, and Years.',
    description: 'Quickly convert between micro durations and macro calendar periods.',
    keywords: ['time converter', 'seconds to minutes', 'hours to days', 'milliseconds converter'],
    popular: false,
    iconName: 'Clock',
    howTo: ['Enter number and switch between time units.'],
    faqs: [{ question: 'How many seconds are in a 24-hour day?', answer: 'There are 86,400 seconds in a standard day.' }]
  },
  {
    id: 'data-storage-converter',
    slug: 'data-storage-converter',
    name: 'Data Storage Converter',
    category: 'converter',
    shortDesc: 'Convert Bits, Bytes, KB, MB, GB, TB, and PB in both decimal and binary (KiB/GiB).',
    description: 'Accurately convert computer storage measurements for hard drives, SSDs, downloads, and cloud quotas.',
    keywords: ['data storage converter', 'mb to gb', 'bytes to megabytes', 'gb to tb'],
    popular: true,
    iconName: 'Database',
    howTo: ['Enter capacity and select source and destination digital storage units.'],
    faqs: [{ question: 'What is the difference between MB and MiB?', answer: 'MB uses decimal 1,000^2 bytes; MiB (mebibyte) uses binary 1,024^2 bytes.' }]
  },
  {
    id: 'energy-converter',
    slug: 'energy-converter',
    name: 'Energy Converter',
    category: 'converter',
    shortDesc: 'Convert Joules, Kilojoules, Kilowatt-hours (kWh), and Calories (kcal).',
    description: 'Convert mechanical, electrical, and dietary energy units for physics and utility bills.',
    keywords: ['energy converter', 'joules to calories', 'kwh to joules', 'dietary calories'],
    popular: false,
    iconName: 'Zap',
    howTo: ['Input energy quantity and convert between Joules, Watt-hours, and Calories.'],
    faqs: [{ question: 'How many Joules are in 1 dietary Calorie (kcal)?', answer: '1 food Calorie (kcal) equals approximately 4,184 Joules.' }]
  },
  {
    id: 'pressure-converter',
    slug: 'pressure-converter',
    name: 'Pressure Converter',
    category: 'converter',
    shortDesc: 'Convert Pascals (Pa), Bar, PSI (Pounds per Square Inch), and Atmospheres (atm).',
    description: 'Convert tire pressure, HVAC values, barometric weather measurements, and engineering units.',
    keywords: ['pressure converter', 'psi to bar', 'bar to psi', 'pascals to atm'],
    popular: false,
    iconName: 'Gauge',
    howTo: ['Enter pressure measurement and pick target standard unit.'],
    faqs: [{ question: 'What is standard atmospheric pressure at sea level?', answer: 'Approximately 1 atm, 1.01325 bar, or 14.696 psi.' }]
  },

  // --- DEVELOPER TOOLS (81 - 100) ---
  {
    id: 'json-formatter',
    slug: 'json-formatter',
    name: 'JSON Formatter',
    category: 'developer',
    shortDesc: 'Beautify, indent, and format raw JSON data with syntax inspection.',
    description: 'Format unreadable compressed JSON into structured, indented code with customizable 2-space or 4-space tab indentation.',
    keywords: ['json formatter', 'beautify json', 'pretty print json', 'format json string'],
    popular: true,
    iconName: 'Code',
    howTo: ['Paste JSON code and click "Format JSON" to beautify with clean indentation.'],
    faqs: [{ question: 'Is my data secure?', answer: 'All formatting runs client-side in your browser JavaScript environment.' }]
  },
  {
    id: 'json-validator',
    slug: 'json-validator',
    name: 'JSON Validator',
    category: 'developer',
    shortDesc: 'Validate JSON syntax and pinpoint exact line numbers of parsing errors.',
    description: 'Detect missing quotes, trailing commas, unmatched brackets, or malformed syntax with explicit error position reporting.',
    keywords: ['json validator', 'validate json', 'json lint', 'check json syntax'],
    popular: true,
    iconName: 'CheckCircle2',
    howTo: ['Paste JSON string into validator to get immediate syntax verification and error diagnostics.'],
    faqs: [{ question: 'Does it catch trailing commas?', answer: 'Yes, trailing commas after objects or arrays are flagged as invalid JSON standard syntax.' }]
  },
  {
    id: 'json-minifier',
    slug: 'json-minifier',
    name: 'JSON Minifier',
    category: 'developer',
    shortDesc: 'Remove whitespace, newlines, and indentations from JSON for production APIs.',
    description: 'Compress JSON payload size by stripping non-functional spaces, saving bandwidth for API transfers.',
    keywords: ['json minifier', 'compress json', 'minify json string'],
    popular: false,
    iconName: 'Minimize2',
    howTo: ['Paste formatted JSON and click Minify to generate a single-line payload.'],
    faqs: [{ question: 'Does minification alter data?', answer: 'No, only superfluous whitespace outside string values is removed.' }]
  },
  {
    id: 'html-formatter',
    slug: 'html-formatter',
    name: 'HTML Formatter',
    category: 'developer',
    shortDesc: 'Beautify messy HTML code with proper tag nesting and indentations.',
    description: 'Organize raw, unformatted HTML markup with clean indentations and structural hierarchy for effortless reading.',
    keywords: ['html formatter', 'beautify html', 'pretty print html'],
    popular: false,
    iconName: 'Code2',
    howTo: ['Paste HTML code and click Format to align tags neatly.'],
    faqs: [{ question: 'Does it handle void tags like img and br?', answer: 'Yes, standard void elements are handled gracefully.' }]
  },
  {
    id: 'html-minifier',
    slug: 'html-minifier',
    name: 'HTML Minifier',
    category: 'developer',
    shortDesc: 'Strip comments, tabs, and redundant whitespace from HTML templates.',
    description: 'Optimize HTML source code to decrease payload bytes and improve site loading performance.',
    keywords: ['html minifier', 'compress html', 'minify html code'],
    popular: false,
    iconName: 'FileMinus',
    howTo: ['Paste HTML, choose whether to remove comments, and click Minify.'],
    faqs: [{ question: 'Will minification break pre or code blocks?', answer: 'Standard pre and textarea content spacing can be preserved.' }]
  },
  {
    id: 'css-formatter',
    slug: 'css-formatter',
    name: 'CSS Formatter',
    category: 'developer',
    shortDesc: 'Beautify CSS stylesheets with standardized indentation and rule brackets.',
    description: 'Transform minified or messy CSS into organized, readable rules with proper selector indentation and property line breaks.',
    keywords: ['css formatter', 'beautify css', 'pretty print stylesheets'],
    popular: false,
    iconName: 'FileCode',
    howTo: ['Paste CSS code and click "Format CSS" for clean styling.'],
    faqs: [{ question: 'Does it support media queries?', answer: 'Yes, nested rules and @media queries are formatted cleanly.' }]
  },
  {
    id: 'css-minifier',
    slug: 'css-minifier',
    name: 'CSS Minifier',
    category: 'developer',
    shortDesc: 'Minify CSS files by stripping comments, spaces, and trailing semicolons.',
    description: 'Shrink CSS stylesheet footprint for faster web delivery and reduced network latency.',
    keywords: ['css minifier', 'compress css', 'minify stylesheet'],
    popular: false,
    iconName: 'Minimize2',
    howTo: ['Paste your CSS and click Minify to get the production-ready code.'],
    faqs: [{ question: 'How much smaller does it get?', answer: 'CSS files typically shrink by 20% to 50% after removing comments and formatting whitespace.' }]
  },
  {
    id: 'javascript-minifier',
    slug: 'javascript-minifier',
    name: 'JavaScript Minifier',
    category: 'developer',
    shortDesc: 'Minify JavaScript code by removing comments, whitespace, and extra line breaks.',
    description: 'Compress JS scripts for web production deployment while preserving functional execution logic.',
    keywords: ['javascript minifier', 'minify js', 'compress javascript'],
    popular: false,
    iconName: 'FileCode2',
    howTo: ['Paste JavaScript code and click Minify.'],
    faqs: [{ question: 'Does it execute my code?', answer: 'No, minification only processes characters as text.' }]
  },
  {
    id: 'javascript-formatter',
    slug: 'javascript-formatter',
    name: 'JavaScript Formatter',
    category: 'developer',
    shortDesc: 'Beautify compressed or one-line JS code with clean indentation.',
    description: 'Inspect minified JavaScript libraries by beautifying brackets, control blocks, and statements into readable code.',
    keywords: ['javascript formatter', 'beautify js', 'pretty print javascript'],
    popular: false,
    iconName: 'Code',
    howTo: ['Paste JS script and click Format.'],
    faqs: [{ question: 'Can I debug code with this?', answer: 'Yes, formatted code makes inspecting logic and variable flows significantly easier.' }]
  },
  {
    id: 'base64-encoder',
    slug: 'base64-encoder',
    name: 'Base64 Encoder',
    category: 'developer',
    shortDesc: 'Encode UTF-8 text and binary strings into safe Base64 format.',
    description: 'Converts strings into standard Base64 representation for data URI embeds, API basic authentication headers, and network transmission.',
    keywords: ['base64 encoder', 'text to base64', 'encode base64', 'data uri creator'],
    popular: true,
    iconName: 'Binary',
    howTo: ['Enter your text string to generate its Base64 encoded equivalent.'],
    faqs: [{ question: 'Does it support international characters?', answer: 'Yes, UTF-8 multi-byte encoding is handled correctly.' }]
  },
  {
    id: 'base64-decoder',
    slug: 'base64-decoder',
    name: 'Base64 Decoder',
    category: 'developer',
    shortDesc: 'Decode Base64 strings back into original readable UTF-8 text.',
    description: 'Decode Base64 tokens, bearer credentials, and encoded parameters back into plain text.',
    keywords: ['base64 decoder', 'decode base64', 'base64 to text'],
    popular: true,
    iconName: 'FileText',
    howTo: ['Paste Base64 encoded string and decode.'],
    faqs: [{ question: 'What if the string contains invalid characters?', answer: 'The tool provides clear error diagnostics if invalid Base64 characters or padding are detected.' }]
  },
  {
    id: 'url-encoder',
    slug: 'url-encoder',
    name: 'URL Encoder',
    category: 'developer',
    shortDesc: 'Percent-encode special characters in URLs and query parameters.',
    description: 'Encodes spaces, ampersands, slashes, and symbols into RFC 3986 percent-encoded sequences for query strings.',
    keywords: ['url encoder', 'percent encoding', 'url encode query string'],
    popular: true,
    iconName: 'Link2',
    howTo: ['Enter raw URL or parameter text to generate the percent-encoded version.'],
    faqs: [{ question: 'How is a space encoded in URLs?', answer: 'Standard percent-encoding uses %20 (or + in form queries).' }]
  },
  {
    id: 'url-decoder',
    slug: 'url-decoder',
    name: 'URL Decoder',
    category: 'developer',
    shortDesc: 'Decode percent-encoded (%20, %2F) URL strings back to readable characters.',
    description: 'Turns percent-encoded query parameters and escaped links back into human-readable text.',
    keywords: ['url decoder', 'percent decode', 'decode url link'],
    popular: true,
    iconName: 'Unlink2',
    howTo: ['Paste encoded URL and click Decode.'],
    faqs: [{ question: 'Can it decode whole query strings?', answer: 'Yes, it accurately parses complex multi-parameter URLs.' }]
  },
  {
    id: 'uuid-generator',
    slug: 'uuid-generator',
    name: 'UUID Generator',
    category: 'developer',
    shortDesc: 'Generate cryptographically random UUID / GUID (v4) identifiers.',
    description: 'Generate standard Universally Unique Identifiers (UUID Version 4) using the browser\'s secure crypto.randomUUID engine.',
    keywords: ['uuid generator', 'guid generator', 'random uuid', 'uuid v4'],
    popular: true,
    iconName: 'Fingerprint',
    howTo: ['Choose quantity and formatting options (uppercase, hyphens) and click "Generate UUIDs".'],
    faqs: [{ question: 'Are UUIDs guaranteed unique?', answer: 'UUID v4 has 122 bits of randomness; the probability of collision is negligible.' }]
  },
  {
    id: 'timestamp-converter',
    slug: 'timestamp-converter',
    name: 'Timestamp Converter',
    category: 'developer',
    shortDesc: 'Convert UNIX Epoch timestamps (seconds/ms) to human-readable dates and UTC.',
    description: 'Convert between UNIX timestamps and ISO 8601, UTC, and local timezone formats in both seconds and milliseconds.',
    keywords: ['timestamp converter', 'unix epoch converter', 'epoch to date', 'date to timestamp'],
    popular: true,
    iconName: 'Clock',
    howTo: ['Enter a timestamp to see date breakdowns, or enter a date to get the numeric timestamp.'],
    faqs: [{ question: 'What is UNIX Epoch time?', answer: 'The number of seconds that have elapsed since January 1, 1970 00:00:00 UTC.' }]
  },
  {
    id: 'regex-tester',
    slug: 'regex-tester',
    name: 'Regex Tester',
    category: 'developer',
    shortDesc: 'Test regular expressions in real-time with match highlights and group captures.',
    description: 'Craft and debug JavaScript regular expressions with flags (g, i, m, s), live text highlighting, and match index details.',
    keywords: ['regex tester', 'regular expression tester', 'test regex', 'javascript regex'],
    popular: true,
    iconName: 'SearchCode',
    howTo: ['Enter your regex pattern, toggle flags, and type test text to inspect matches.'],
    faqs: [{ question: 'What flags are supported?', answer: 'Global (g), Case-insensitive (i), Multiline (m), and DotAll (s).' }]
  },
  {
    id: 'html-entity-encoder',
    slug: 'html-entity-encoder',
    name: 'HTML Entity Encoder',
    category: 'developer',
    shortDesc: 'Convert reserved HTML characters (&, <, >, ", \') into safe named entities.',
    description: 'Prevent XSS vulnerabilities and display raw code snippets safely by encoding special characters into &amp;, &lt;, and &gt;.',
    keywords: ['html entity encoder', 'escape html', 'html special characters'],
    popular: false,
    iconName: 'Shield',
    howTo: ['Paste HTML or code to escape reserved characters safely.'],
    faqs: [{ question: 'Why is this important?', answer: 'It ensures browsers display raw tags as visible text rather than parsing them as executable DOM elements.' }]
  },
  {
    id: 'html-entity-decoder',
    slug: 'html-entity-decoder',
    name: 'HTML Entity Decoder',
    category: 'developer',
    shortDesc: 'Convert &amp;, &lt;, &gt;, and numeric HTML entities back to raw text.',
    description: 'Decode escaped strings copied from database logs or HTML templates back into regular symbols.',
    keywords: ['html entity decoder', 'unescape html', 'decode html entities'],
    popular: false,
    iconName: 'FileCode',
    howTo: ['Paste escaped entity strings and view decoded text.'],
    faqs: [{ question: 'Does it decode numeric hex entities?', answer: 'Yes, named entities (&copy;), decimal (&#169;), and hex (&#xA9;) entities are supported.' }]
  },
  {
    id: 'color-code-converter',
    slug: 'color-code-converter',
    name: 'Color Code Converter',
    category: 'developer',
    shortDesc: 'Convert colors seamlessly across HEX, RGB, HSL, and CSS color declarations.',
    description: 'Translates color codes across HEX (#2563EB), RGB (rgb(37, 99, 235)), and HSL (hsl(221, 83%, 53%)) with alpha transparency.',
    keywords: ['color code converter', 'hex to rgb', 'rgb to hex', 'hsl converter'],
    popular: true,
    iconName: 'Palette',
    howTo: ['Type any color code to see all equivalent formats simultaneously with a live color preview.'],
    faqs: [{ question: 'Does it support 8-digit HEX alpha?', answer: 'Yes, 3, 6, and 8-character HEX codes are supported.' }]
  },
  {
    id: 'lorem-ipsum-generator-for-developers',
    slug: 'lorem-ipsum-generator-for-developers',
    name: 'Lorem Ipsum Generator for Developers',
    category: 'developer',
    shortDesc: 'Generate mock JSON data, dummy user objects, sample emails, and code stubs.',
    description: 'Generate realistic developer mock data including fake user arrays, products, UUIDs, dates, and API response templates.',
    keywords: ['developer lorem ipsum', 'mock json generator', 'dummy api data', 'fake user data'],
    popular: false,
    iconName: 'FileJson',
    howTo: ['Select template type (Users, Products, Posts, or Key-Value pairs), set record count, and copy JSON.'],
    faqs: [{ question: 'Can I use this for API mock testing?', answer: 'Yes, the generated JSON adheres strictly to valid JSON syntax standards.' }]
  },

  // --- UTILITY & SECURITY TOOLS (101 - 110) ---
  {
    id: 'qr-code-generator',
    slug: 'qr-code-generator',
    name: 'QR Code Generator',
    category: 'qr-barcode',
    shortDesc: 'Create customizable QR codes for URLs, WiFi credentials, text, and phone numbers.',
    description: 'Generate high-resolution QR codes with customizable size, error correction levels (L, M, Q, H), and instant PNG download.',
    keywords: ['qr code generator', 'make qr code', 'free qr code', 'wifi qr code'],
    popular: true,
    iconName: 'QrCode',
    howTo: ['Enter your website URL or text, pick error correction level, and download the high-res PNG image.'],
    faqs: [
      { question: 'Do these QR codes expire?', answer: 'No! They are direct static QR codes that encode your text directly and never expire.' },
      { question: 'What error correction level should I choose?', answer: 'Level M or Q is ideal for most scenarios, allowing recovery even if partially obscured.' }
    ]
  },
  {
    id: 'qr-code-reader',
    slug: 'qr-code-reader',
    name: 'QR Code Reader',
    category: 'qr-barcode',
    shortDesc: 'Scan and decode QR codes from uploaded image files directly in your browser.',
    description: 'Upload any photo or screenshot of a QR code to decode the embedded URL, text, or data without needing a smartphone camera.',
    keywords: ['qr code reader', 'scan qr code from image', 'decode qr code online'],
    popular: true,
    iconName: 'ScanLine',
    supportedFormats: 'JPG, PNG, WebP',
    howTo: ['Upload an image containing a QR code to read its content immediately.'],
    faqs: [{ question: 'Does this use my webcam?', answer: 'This tool decodes uploaded image files and screenshots with 100% privacy.' }]
  },
  {
    id: 'password-generator',
    slug: 'password-generator',
    name: 'Password Generator',
    category: 'utility',
    shortDesc: 'Create cryptographically strong, unbreakable passwords with customizable characters.',
    description: 'Generate secure random passwords using the browser\'s crypto.getRandomValues API. Choose length, numbers, symbols, uppercase, and lowercase.',
    keywords: ['password generator', 'strong password generator', 'random password creator', 'secure password'],
    popular: true,
    iconName: 'KeyRound',
    notice: 'Generated passwords are created entirely on your device and are never transmitted across the network. Store them in a reputable password manager.',
    howTo: ['Set password length, check desired character sets, and click "Generate Password".'],
    faqs: [{ question: 'How secure are these passwords?', answer: 'They use cryptographic entropy from window.crypto, making them resistant to brute-force attacks.' }]
  },
  {
    id: 'random-number-generator',
    slug: 'random-number-generator',
    name: 'Random Number Generator',
    category: 'utility',
    shortDesc: 'Pick unbiased random integers or decimals within any custom range.',
    description: 'Draw lottery numbers, raffle winners, statistical samples, or random picks between custom Min and Max values.',
    keywords: ['random number generator', 'pick a number', 'rng', 'random integer picker'],
    popular: true,
    iconName: 'Dices',
    howTo: ['Specify Minimum and Maximum values, select count of numbers, and generate.'],
    faqs: [{ question: 'Can it generate multiple unique numbers?', answer: 'Yes, toggle "Allow duplicates" off to ensure all generated numbers in the set are unique.' }]
  },
  {
    id: 'random-string-generator',
    slug: 'random-string-generator',
    name: 'Random String Generator',
    category: 'utility',
    shortDesc: 'Generate random alphanumeric strings, secret keys, and verification tokens.',
    description: 'Produce random characters for testing, temporary session tokens, salts, or license codes.',
    keywords: ['random string generator', 'generate random characters', 'token generator'],
    popular: false,
    iconName: 'Key',
    howTo: ['Choose string length and allowed characters (Letters, Digits, Symbols) to generate.'],
    faqs: [{ question: 'Is it cryptographically secure?', answer: 'Yes, generated using cryptographically strong pseudo-random number generator (CSPRNG).' }]
  },
  {
    id: 'dice-roller',
    slug: 'dice-roller',
    name: 'Dice Roller',
    category: 'utility',
    shortDesc: 'Roll virtual dice: D4, D6, D8, D10, D12, D20, and D100 for tabletop games.',
    description: 'Simulate physical tabletop dice rolls for Dungeons & Dragons, board games, and probability demonstrations with roll totals.',
    keywords: ['dice roller', 'roll dice online', 'd20 roller', 'd6 roll'],
    popular: false,
    iconName: 'Dice5',
    howTo: ['Select dice type and number of dice to roll, then click "Roll Dice".'],
    faqs: [{ question: 'Are the rolls fair?', answer: 'Yes, each face has an equal probability based on uniform cryptographic random values.' }]
  },
  {
    id: 'stopwatch',
    slug: 'stopwatch',
    name: 'Stopwatch',
    category: 'utility',
    shortDesc: 'Accurate digital stopwatch with milliseconds precision and lap time tracking.',
    description: 'Measure elapsed time with precision millisecond accuracy, lap splits, and clean start/stop/reset controls.',
    keywords: ['online stopwatch', 'stopwatch with laps', 'digital timer'],
    popular: false,
    iconName: 'Timer',
    howTo: ['Click Start to begin, Lap to record splits, and Stop when finished.'],
    faqs: [{ question: 'Does it continue if I switch tabs?', answer: 'Yes, time calculations are derived from system clock delta timestamps.' }]
  },
  {
    id: 'countdown-timer',
    slug: 'countdown-timer',
    name: 'Countdown Timer',
    category: 'utility',
    shortDesc: 'Set custom timers with audio alerts for cooking, workouts, and meetings.',
    description: 'Configurable countdown timer with customizable hours, minutes, and seconds, visual progress ring, and audio bell upon completion.',
    keywords: ['countdown timer', 'online timer', 'set timer', 'timer with alarm'],
    popular: false,
    iconName: 'Hourglass',
    howTo: ['Enter hours, minutes, and seconds, then click Start.'],
    faqs: [{ question: 'Will I hear a sound when time is up?', answer: 'Yes, an audio chime plays when the countdown reaches 00:00:00.' }]
  },
  {
    id: 'pomodoro-timer',
    slug: 'pomodoro-timer',
    name: 'Pomodoro Timer',
    category: 'utility',
    shortDesc: 'Boost productivity with 25-minute focus intervals and 5-minute restorative breaks.',
    description: 'Implement the proven Pomodoro time management technique to conquer procrastination and maintain sustained mental focus.',
    keywords: ['pomodoro timer', 'focus timer', 'productivity timer', 'study timer'],
    popular: true,
    iconName: 'Clock',
    howTo: ['Click Start Focus (25 min), work with singular attention until chime, then take a Short Break (5 min).'],
    faqs: [{ question: 'What is the Pomodoro technique?', answer: 'A time management system developed by Francesco Cirillo using timed focus sprints separated by short intervals.' }]
  },
  {
    id: 'color-picker',
    slug: 'color-picker',
    name: 'Color Picker',
    category: 'color',
    shortDesc: 'Interactive color canvas, palette generator, and harmony suggestions.',
    description: 'Pick exact colors with visual hue/saturation canvas, test contrast ratios, and copy HEX, RGB, and HSL formats.',
    keywords: ['color picker', 'hex color picker', 'rgb color picker', 'palette tool'],
    popular: true,
    iconName: 'Pipette',
    howTo: ['Click anywhere on the spectrum or input codes to inspect color harmonies and values.'],
    faqs: [{ question: 'Can I test text contrast?', answer: 'Yes, view WCAG accessibility contrast against white and black backgrounds.' }]
  },

  // --- YOUTUBE & SOCIAL TOOLS (111 - 118) ---
  {
    id: 'youtube-thumbnail-size-tool',
    slug: 'youtube-thumbnail-size-tool',
    name: 'YouTube Thumbnail Size Tool',
    category: 'social',
    shortDesc: 'Verify thumbnail dimensions (1280x720), 16:9 ratio, and 2MB upload limits.',
    description: 'Inspect your YouTube cover graphics against official creator guidelines: 1280x720 pixels, minimum 640px width, 16:9 aspect ratio, and under 2MB.',
    keywords: ['youtube thumbnail size', 'youtube thumbnail checker', 'thumbnail dimension tool'],
    popular: true,
    iconName: 'Video',
    supportedFormats: 'JPG, PNG, WebP',
    howTo: ['Upload your planned YouTube thumbnail to check dimensions, aspect ratio, and file weight.'],
    faqs: [{ question: 'What is the recommended YouTube thumbnail resolution?', answer: 'Google recommends 1280 x 720 pixels with a minimum width of 640 pixels in 16:9 aspect ratio.' }]
  },
  {
    id: 'youtube-title-length-checker',
    slug: 'youtube-title-length-checker',
    name: 'YouTube Title Length Checker',
    category: 'social',
    shortDesc: 'Optimize video titles to prevent truncation on mobile search and desktop feeds.',
    description: 'Ensure video titles stay within the recommended 60-70 character sweet spot so viewers see your full hook without ellipsis cutoffs.',
    keywords: ['youtube title length checker', 'video title length', 'youtube seo title'],
    popular: true,
    iconName: 'Youtube',
    howTo: ['Type your proposed title to preview mobile and desktop search snippet truncation.'],
    faqs: [{ question: 'What is the maximum YouTube title length?', answer: 'The absolute limit is 100 characters, but anything over 60-70 characters may get truncated on mobile devices.' }]
  },
  {
    id: 'youtube-description-character-counter',
    slug: 'youtube-description-character-counter',
    name: 'YouTube Description Character Counter',
    category: 'social',
    shortDesc: 'Track description characters against the 5,000-character ceiling and preview the above-the-fold cutoff.',
    description: 'Optimize video descriptions: track total characters toward the 5,000 limit and preview the vital first 3 lines shown above the "Show more" button.',
    keywords: ['youtube description character counter', 'video description length', 'above the fold preview'],
    popular: false,
    iconName: 'AlignJustify',
    howTo: ['Paste your description copy to check character count and preview the fold boundary.'],
    faqs: [{ question: 'How many characters are shown before "Show More"?', answer: 'Typically the first 100-150 characters (approximately 3 lines) appear before the "Show More" fold.' }]
  },
  {
    id: 'social-media-image-size-guide',
    slug: 'social-media-image-size-guide',
    name: 'Social Media Image Size Guide',
    category: 'social',
    shortDesc: 'Official dimensions and aspect ratios for YouTube, Instagram, X, Facebook, and LinkedIn.',
    description: 'Quick reference and dimension tester for profile pictures, banner headers, feed posts, reels, and stories across all major platforms.',
    keywords: ['social media image sizes', 'instagram photo dimensions', 'twitter header size', 'youtube banner dimensions'],
    popular: true,
    iconName: 'Image',
    howTo: ['Select a social platform to view exact pixel dimensions, aspect ratios, and file requirements.'],
    faqs: [{ question: 'What is the Instagram story size?', answer: '1080 x 1920 pixels (9:16 vertical aspect ratio).' }]
  },
  {
    id: 'open-graph-preview-generator',
    slug: 'open-graph-preview-generator',
    name: 'Open Graph Preview Generator',
    category: 'social',
    shortDesc: 'Preview and generate og:title, og:description, and og:image social cards.',
    description: 'Visualize how your web page links will appear when shared on Twitter/X, Facebook, LinkedIn, Discord, and Slack, and generate ready-to-paste meta tags.',
    keywords: ['open graph preview', 'og meta tag generator', 'social share preview', 'twitter card generator'],
    popular: true,
    iconName: 'Share',
    howTo: ['Enter your page title, description, URL, and image URL to view live social card previews and copy HTML meta tags.'],
    faqs: [{ question: 'What is the optimal og:image size?', answer: '1200 x 630 pixels provides the best high-DPI resolution on all social networks.' }]
  },
  {
    id: 'youtube-hashtag-counter',
    slug: 'youtube-hashtag-counter',
    name: 'YouTube Hashtag Counter',
    category: 'social',
    shortDesc: 'Count hashtags and prevent exceeding YouTube\'s 15-hashtag penalty threshold.',
    description: 'YouTube ignores all hashtags on a video if more than 15 are included. This tool tracks hashtag count and extracts tags cleanly.',
    keywords: ['youtube hashtag counter', 'count hashtags', 'video hashtags checker'],
    popular: false,
    iconName: 'Hash',
    howTo: ['Paste your hashtags or description to count total hashtags and ensure compliance with YouTube policies.'],
    faqs: [{ question: 'What happens if you use more than 15 hashtags on YouTube?', answer: 'YouTube will ignore all hashtags on that video, and excessive tags may be flagged as spam.' }]
  },
  {
    id: 'instagram-caption-counter',
    slug: 'instagram-caption-counter',
    name: 'Instagram Caption Counter',
    category: 'social',
    shortDesc: 'Track Instagram caption characters (2,200 limit) and hashtag count (30 limit).',
    description: 'Write the perfect Instagram caption: monitors characters against the 2,200 limit, tracks hashtags against the 30-tag ceiling, and previews the 125-character truncation fold.',
    keywords: ['instagram caption counter', 'insta character counter', 'instagram hashtag counter'],
    popular: true,
    iconName: 'Instagram',
    howTo: ['Draft your Instagram caption to monitor character length, line breaks, and hashtag limits.'],
    faqs: [{ question: 'What is the caption character limit on Instagram?', answer: 'The maximum length is 2,200 characters, though only the first ~125 characters appear before "...more".' }]
  },
  {
    id: 'twitter-x-character-counter',
    slug: 'twitter-x-character-counter',
    name: 'Twitter/X Character Counter',
    category: 'social',
    shortDesc: 'Count characters toward the standard 280-character tweet limit with URL scaling.',
    description: 'Track tweet length with exact Twitter counting rules: standard 280-character gauge, URL character estimation (23 chars per link), and emoji counting.',
    keywords: ['twitter character counter', 'x character counter', 'tweet length checker'],
    popular: true,
    iconName: 'Twitter',
    howTo: ['Type your tweet to track remaining characters and visual progress ring toward the 280 limit.'],
    faqs: [{ question: 'How do URLs count on Twitter/X?', answer: 'All URLs count as 23 characters regardless of their actual length due to t.co wrapping.' }]
  }
];
