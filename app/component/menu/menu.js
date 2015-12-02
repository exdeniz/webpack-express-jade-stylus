function menu() {
    require('jquery')
    require('smartmenus')

    $('.sm-js').smartmenus({
        subIndicators: false,
        subMenusMinWidth: '100%',
        mainMenuSubOffsetX: 1
    })
}

export { menu };
