import { Selector } from 'testcafe'; 

fixture `Getting Started`
  .page `file:///Users/elly/Desktop/Projects/tic_tac_toe/index.html`;  

test('#first player is O', async t => {
  await t
    .click('#spot0')
    .expect(Selector('#spot0').innerText).eql('O');
});

test('#switch player during play', async t => {
  await t
    .click('#spot0')
    .click('#spot1')
    .expect(Selector('#spot1').innerText).eql('X');
}); 

test('#disable button after click', async t => {
  await t
    .click('#spot0')
    .expect(Selector('#spot0').hasAttribute('disabled')).ok();
});

test('#disable all buttons after someone won', async t => {
  await t
    .click('#spot0')
    .click('#spot1')
    .click('#spot3')
    .click('#spot2')
    .click('#spot6')
    .expect(Selector('.board').hasAttribute('disabled')).ok();
});

test('#O win and show as winner', async t => {
  await t
    .click('#spot0')
    .click('#spot8')
    .click('#spot3')
    .click('#spot5')
    .click('#spot6')
    .expect(Selector('#endStatus').innerText).eql('Game Over! Winner: O');
});

test('#X win and show as winner', async t => {
  await t
    .click('#spot2')
    .click('#spot0')
    .click('#spot8')
    .click('#spot3')
    .click('#spot5')
    .click('#spot6')
    .expect(Selector('#endStatus').innerText).eql('Game Over! Winner: O');
});

test('#draw will show when all spots filled with no winner', async t => {
  await t
    .click('#spot0')
    .click('#spot1')
    .click('#spot3')
    .click('#spot4')
    .click('#spot7')
    .click('#spot6')
    .click('#spot2')
    .click('#spot5')
    .click('#spot8')
    .expect(Selector('#endStatus').innerText).eql('Game Over! Is Draw!');
});

test('#Re-start empty all spots in any time', async t => {
  await t
    .click('#spot0')
    .click('#spot1')
    .click('#spot3')
    .click('#spot4')
    .click('#reStart')
    .expect(Selector('.board').innerText).eql('');
});

test('#Re-start enable all buttons', async t => {
  await t
    .click('#spot0')
    .click('#spot1')
    .click('#spot3')
    .click('#spot4')
    .click('#spot7')
    .click('#spot6')
    .click('#spot2')
    .click('#spot5')
    .click('#spot8')
    .click('#reStart')
    .expect(Selector('.board').hasAttribute('disabled')).notOk();
});

test('#Re-start remove end game status', async t => {
  await t
    .click('#spot2')
    .click('#spot0')
    .click('#spot8')
    .click('#spot3')
    .click('#spot5')
    .click('#spot6')
    .click('#reStart')
    .expect(Selector('#endStatus', { visibilityCheck: false }).clientWidth).eql(0);
});

test('#Re-start ed game can be completed as new', async t => {
  await t
    .click('#spot0')
    .click('#spot1')
    .click('#spot3')
    .click('#spot4')
    .click('#reStart')
    .click('#spot2')
    .click('#spot0')
    .click('#spot8')
    .click('#spot3')
    .click('#spot5')
    .click('#spot6')
    .expect(Selector('#endStatus').innerText).eql('Game Over! Winner: O');
});