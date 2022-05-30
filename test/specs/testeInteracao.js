describe("Teste Interação - Alert Dialogs", () => {
    afterEach(() => {
        driver.reset();
    });

    it("Verificar fluxo e utilização em App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        const menuOpcoes = await $("android.widget.FrameLayout");
        const menuDialogs = await $('android=new UiSelector().text("App/Alert Dialogs").className("android.widget.TextView")').getText();

        //cancelar
        await $("id=two_buttons").click();
        expect(menuOpcoes).toBeDisplayed();
        await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').click();
        expect(menuDialogs).toBe("App/Alert Dialogs");

        //ok
        await $("id=two_buttons").click();
        expect(menuOpcoes).toBeDisplayed();
        await $('android=new UiSelector().text("OK").className("android.widget.Button")').click();
        expect(menuDialogs).toBe("App/Alert Dialogs");

    });

    it("Verificar fluxo e utilização em App/Alert Dialogs/LIST DIALOG/Command one", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        const menuOpcoes = await $("android.widget.FrameLayout");
        await $("id=select_button").click();
        expect(menuOpcoes).toBeDisplayed();

        //Command one
        await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').click();
        const commandOne = await $("android.widget.TextView").getText();
        expect(commandOne).toBe("You selected: 0 , Command one");


    });

    it("Verificar fluxo e utilização em App/Alert Dialogs/LIST DIALOG/Command two", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        const menuOpcoes = await $("android.widget.FrameLayout");
        await $("id=select_button").click();
        expect(menuOpcoes).toBeDisplayed();

        //Command two
        await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').click();
        const commandTwo = await $("android.widget.TextView").getText();
        expect(commandTwo).toBe("You selected: 1 , Command two");

    });

    it("Verificar fluxo e utilização em App/Alert Dialogs/LIST DIALOG/Command three", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        const menuOpcoes = await $("android.widget.FrameLayout");
        await $("id=select_button").click();
        expect(menuOpcoes).toBeDisplayed();

        //Command three
        await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').click();
        const commandThree = await $("android.widget.TextView").getText();
        expect(commandThree).toBe("You selected: 2 , Command three");

    });

    it("Verificar fluxo e utilização em App/Alert Dialogs/LIST DIALOG/Command four", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        const menuOpcoes = await $("android.widget.FrameLayout");
        await $("id=select_button").click();
        expect(menuOpcoes).toBeDisplayed();

        //Command four
        await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').click();
        const commandThree = await $("android.widget.TextView").getText();
        expect(commandThree).toBe("You selected: 3 , Command four");

    });

    it("Verificar fluxo e utilização em App/Fragment/Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        const menuOpcoes = await $("android.widget.LinearLayout");
        expect(menuOpcoes).toBeDisplayed();
        
        //clica 1 hide
        await $("id=frag1hide").click();
        const botaoShow1 = await $("id=frag1hide").getText();
        expect(botaoShow1).toBe("SHOW");

        //clica 1 show
        await $("id=frag1hide").click();
        const frameTexto1 = await $("android.widget.TextView");
        expect(frameTexto1).toBeDisplayed();

        const textoAparece1 = await $('android=new UiSelector().text("The fragment saves and restores this text.").className("android.widget.TextView")').getText();
        expect(textoAparece1).toBe("The fragment saves and restores this text.");
        
        //clica 2 hide
        await $("id=frag2hide").click();
        const botaoShow2 = await $("id=frag2hide").getText();
        expect(botaoShow2).toBe("SHOW");

        //clica 2 show
        await $("id=frag2hide").click();
        const frameTexto2 = await $("android.widget.TextView");
        expect(frameTexto2).toBeDisplayed();

        const textoAparece2 = await $('android=new UiSelector().text("The TextView saves and restores this text.").className("android.widget.TextView")').getText();
        expect(textoAparece2).toBe("The TextView saves and restores this text.");

    });

    it("Verificar fluxo e utilização em App/Action Bar/Display options/DISPLAY_HOME_AS_UP", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("DISPLAY_HOME_AS_UP").className("android.widget.Button")').click();
        
        //validação ativo
        const setaVoltar = await $("android.widget.ImageButton");
        expect(setaVoltar).toBeDisplayed();

        //validação inativo
        await $('android=new UiSelector().text("DISPLAY_HOME_AS_UP").className("android.widget.Button")').click();
        expect(setaVoltar).toBeDisplayed(false);

    });

    it("Verificar fluxo e utilização em App/Action Bar/Display options/DISPLAY_SHOW_TITLE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("DISPLAY_SHOW_TITLE").className("android.widget.Button")').click();
        
        //validação inativo
        const barraTitulo = await $("android.widget.TextView");
        expect(barraTitulo).toBeDisplayed(false);

        //validação ativo
        await $('android=new UiSelector().text("DISPLAY_SHOW_TITLE").className("android.widget.Button")').click();
        const barraTituloAtivo = await $("android.widget.TextView").getText();
        expect(barraTituloAtivo).toBe("App/Action Bar/Display Options");

    });

    it("Verificar fluxo e utilização em App/Action Bar/Display options/DISPLAY_SHOW_CUSTOM", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM").className("android.widget.Button")').click();
        
        //validação ativo
        const frameCustom = await $("android.widget.Button");
        expect(frameCustom).toBeDisplayed();

        //validação inativo
        await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM").className("android.widget.Button")').click();
        expect(frameCustom).toBeDisplayed(false);

    });

    it("Verificar fluxo e utilização em App/Action Bar/Display options/DISPLAY_SHOW_NAVIGATION", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("NAVIGATION").className("android.widget.Button")').click();
        
        //validação ativo
        const frameNavegation = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")');
        expect(frameNavegation).toBeDisplayed();

        //validação inativo
        await $('android=new UiSelector().text("NAVIGATION").className("android.widget.Button")').click();
        expect(frameNavegation).toBeDisplayed(false);

    });

});