
describe('setting test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const typeInput = (name:string,content:string) => {
        cy.get(`[name=${name}]`).click();
        if (content !== '') {
            cy.get(`[id=${name}]`).type(content);
        }
        
        cy.get(`[id=zh-CN`).type('fromzhcn');
    };

    it('name of input with set of language', () => {
        typeInput('name','123');
    });

    it('title of input with set of language', () => {
        typeInput('title','456');
    });

    it('title and nameof input with set of language', () => {
        typeInput('title','456');
        typeInput('name','123');
    });

    const cancel = (name:string,content:string,result:string) => {
        typeInput(name,content);

        cy.contains('Cancel').click();
        cy.get(`[id=${name}]`).should('have.value',result)
    };

    it('when clicking cancel,name of input will be previous content', () => {
        cancel('name','','测试');
    });
    
    it('when clicking cancel,title of input will be previous content', () => {
        cancel('title','','标题');
    });

    it('save is success', () => {
        cy.contains('Save').click();
        //cy.contains('Updating settings is success').should('be.visible');
    });
});
