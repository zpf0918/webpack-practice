const makeImgage = (url, height = 100, width = 200) => {
  const img = document.createElement('img')
  img.src = url
  img.height = height
  img.width = width

  return img
}

export default makeImgage