async function logout(e) {
    try {
        await fetch("/logout", {
            method: "POST",
        });

    } catch (error) {
        window.location.reload();
    }

    window.location.reload();
}