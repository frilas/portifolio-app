const isEnableMock = process.env.REACT_APP_ENABLE_MOCK

const mock = async () => {
  if (isEnableMock === 'true') {
    await import('./mock')
  }
}

export {mock}
