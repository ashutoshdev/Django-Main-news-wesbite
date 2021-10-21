let form = `<div class="payout-box box">
    
    <div>Congrats! You just earned _ satoshis.</div>
    
    <div>Enter Your Bitcoin Address (FaucetHub) Below.</div>
    
    <div class="field">
        <p class="control has-icons-left">
            <input class="input is-large" type="text" placeholder="Enter Your Bitcoin Address (FaucetHub)">
            <span class="icon is-left is-large">
                <i class="fab fa-bitcoin"></i>
            </span>
        </p>
    </div>
    
    <div class="control">
        <a class="button is-success is-outlined is-medium">Save</a>
    </div>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
    // Add to id="payout-box" if exist
    jQuery('#payout-box').after(form);
    jQuery('.payout-box .control .button').on('click', () => {
        let wallet = jQuery('.payout-box .input').text();

        fetch('/payout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-CSRFToken': getMttCSRF()
            },
            credentials: 'include',
            body: JSON.stringify({wallet})
        })
    });

});
