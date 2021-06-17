const customListeners = {
    modalCreated: () => {
        return new Event('modal')
    }
}

export { customListeners }