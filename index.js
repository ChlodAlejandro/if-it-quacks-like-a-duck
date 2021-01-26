/**
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org/>
 */
 
/**
 * **if-it-quacks-like-a-duck**
 *
 * Determine if something... quacks like a duck...
 *
 * @author Chlod Alejandro <chlod@chlod.net>
 * @license The Unlicense
 **/
function isDuck(something, referenceDuck) {
    
    if (referenceDuck != null) {
        
        // We have a reference duck. Let's use the reference duck.
        
        // Direct equality comparison
        if (something === referenceDuck)
            return true;
        
        // Maybe they're the same species of duck?
        if (typeof something === "object" && typeof referenceDuck === "object")
            if (something.constructor.name === referenceDuck.constructor.name)
                return true;
        
        // Maybe we were given the blueprints of a duck?
        if (typeof something === "object" && typeof referenceDuck === "function")
            if (something instanceof referenceDuck)
                return true;
        
        // Probably not a duck.
        return false;
        
    }
    
    if (something == null) {
        
        // Null and undefined are never ducks.
        return false;
        
    } else if (typeof something === "function") {
        
        // The returned object might be a duck.
        return isDuck(something());
        
    } else if (typeof something === "object") {
        
        // The constructor or class might be a duck.
        return isDuck(something.constructor.name);
        
    } else if (typeof something !== "string") {
        
        // Other data types are never ducks.
        return false;
        
    } else {
        
        // Does it quack like a normal duck?
        if (/\bducks?\b/gi.test(something))
            return true;
            
        // Maybe a younger duck?
        if (/\b((baby)[\s-_]*)?duck[\s-_]*(lings?|child(ren)?|bab(y|ies))?\b/gi.test(something))
            return true;
            
        // Maybe multiple younger ducks?
        if (/\b(young[\s-_]*)?ducks?\b/gi.test(something))
            return true;
        
        // Maybe a literal duck quack?
        if (/\bduck[\s-_]*(quack)?\b/gi.test(something))
            return true;
        
        // Maybe a JSON-encoded duck?
        try {
            
            if (isDuck(JSON.parse(something)))
                return true;
                
        } catch (e) {
            
            // Maybe it's missing quotes?
            try {
                
                if (isDuck(JSON.parse(`"${something}"`)))
                    return true;
                    
            } catch (e) {}
            
        }
        
        // We've exhausted all options. Probably not a duck.
        return false;
        
    }
    
}

module.exports = isDuck;