import React from 'react';
import './HTML5Form.sass';

const HTML5Form = () => (
    <div className="wrapper">
        <form action="example.js">
            <fieldset>
                <legend>Postal Address</legend>
                <label htmlFor="street">Street Address </label>
                <input type='text' id="street" name="street" />
                <label htmlFor="suburb">Suburb </label>
                <input type='text' id="suburb" name="suburb" />
                <label htmlFor="state">State </label>
                <input type='text' id="state" name="state" />
                <label htmlFor="postcde">Postcode </label>
                <input type='text' id="postcode" name="postcode" />
            </fieldset>
        </form>
    </div>
)

export default HTML5Form;
