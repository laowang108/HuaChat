document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');
    const imagesFolder = './images/';

    // 这里硬编码图片列表，以确保在本地和线上都能正常工作。
    // 在你的本地文件夹添加/删除图片后，记得更新这个列表。
    const imageFiles = [
        'photo1.jpg',
        'photo2.png',
        'photo3.webp'
    ];

    imageFiles.forEach(fileName => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const imgElement = document.createElement('img');
        imgElement.src = imagesFolder + fileName;
        imgElement.alt = fileName;

        item.appendChild(imgElement);
        galleryContainer.appendChild(item);
    });
});

