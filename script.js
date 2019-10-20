function getSpaceImage() {
    const imageUrl = 'https://apod.nasa.gov/apod/image/1910/JupiterShadow_JunoGill_3535.jpg'
    const imageTitle = 'Io Eclipse Shadow on Jupiter from Juno'

    const textElement = document.querySelector('p')
    textElement.innerText = imageTitle

    const imageElement = document.createElement('img')
    imageElement.src = imageUrl

    const imageContainer = document.querySelector('.image-container')
    imageContainer.appendChild(imageElement)
}


function getRandomSpaceImageInfo() {
    const endpoint = 'https://api.nasa.gov/planetary/apod'
    const apiKey = 'DEMO_KEY'
    const query = `${endpoint}?api_key=${apiKey}&count=1`

    return fetch(query).then((response) => response.json())

}

function getRandomSpaceImage() {
    getRandomSpaceImageInfo().then((imageInfoList) => {
        const imageInfo = imageInfoList[0]
        const imageTitle= imageInfo.title
        const imageUrl = imageInfo.url
        const imageDesc = imageInfo.explanation

        const textElement = document.querySelector('p')
        textElement.innerText = imageTitle

        const imageElement = document.createElement('img')
        imageElement.src = imageUrl

        const imageContainer = document.querySelector('.image-container')
        imageContainer.appendChild(imageElement)
        
        const descElement = document.createElement('p')
        const desc = document.createTextNode(imageDesc)
        descElement.appendChild(desc)

        const descContainer = document.querySelector('.desc')
        descContainer.appendChild(descElement)
    })
}

getRandomSpaceImage()