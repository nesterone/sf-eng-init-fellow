function withBoxUnlocked(body) {
  box.unlock();
  try { body() }
  catch(e){ if(!box.locked)
    console.log(e);}
  finally{
    box.lock()}
}
withBoxUnlocked(function() {
  box.content.push("gold piece");
});
try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);

// > true
