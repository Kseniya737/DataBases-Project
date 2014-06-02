/**
 * 
 * @author ксюша
 * @name ServiceList
 * rolesAllowed admin user
 */
function ServiceList(){
var self = this;
function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	self.Defect = "%%";
        self.qService.requery();
}//GEN-LAST:event_formWindowOpened

function SearchActionPerformed(evt) {//GEN-FIRST:event_SearchActionPerformed
	self.model.params.Defect = "%" + self.textField1.text + "%";
        self.model.params.num = "%" + self.textField1.text + "%";
        self.model.qService.requery();
}//GEN-LAST:event_SearchActionPerformed

function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed

    function textField1ActionPerformed(evt) {//GEN-FIRST:event_textField1ActionPerformed
        // TODO Добавьте свой код:
    }//GEN-LAST:event_textField1ActionPerformed
}