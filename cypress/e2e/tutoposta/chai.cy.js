/// <reference types="cypress"/>

describe('Probando librería CHAI', function(){
    var a=1;
    it('vamos a ver una igualdad', function(){
        expect(1==1).to.equal(true);
    })
    it('vamos a ver que no sea una igualdad', function(){
        expect(1==2).to.equal(false);
    })
    it('vamos a ver que una resta esté bien', function(){
        expect(1-1).to.equal(0);
    })
    it('vamos a ver que una resta no esté bien', function(){
        expect(1-1).to.not.equal(2);
    })
    it('vamos a ver que sea verdadero', function(){
        expect(2==2).to.be.true;
    })
    it('vamos a ver que sea falso', function(){
        expect(2==1).to.be.false;
    })
    it('que una variable exista', function(){
        expect(a).to.exist;
    })
})