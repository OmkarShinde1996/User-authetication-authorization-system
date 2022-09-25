const logout = (req, resp) => {
    resp.clearCookie('userRegistered')
    resp.redirect('/')
}
module.exports = logout