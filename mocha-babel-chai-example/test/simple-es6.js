import chai    from 'chai'

var expect = chai.expect

describe("a babel test", () =>{

  it("should show a deep error", () => {
    expect({a: 1}).to.be({a: 2})
  })
})
