/**
 * 
 * @author ксюша
 * @name MainForm
 * @public
 */


function MainForm() {
    
var srv = new ServerModule("Server"); //загрузка серверного модуля
var self = this, model = this.model, form = this;


function CarsInformationActionPerformed(evt) {//GEN-FIRST:event_CarsInformationActionPerformed
       try {
            //доступ к другому модулю имеют только пользователи группы admin
            //если у пользователя нет прав, то произойдет исключение
            var carListWindow = new CarsList();
            carListWindow.show();
        } catch (ex) {
            //вот здесь нужно пользователю показать, что у него нет прав на выполнение
            alert("Нет доступа");
        }
}//GEN-LAST:event_CarsInformationActionPerformed


function ClientsInformationActionPerformed(evt) {//GEN-FIRST:event_ClientsInformationActionPerformed
       try {
            //доступ к другому модулю имеют только пользователи группы admin
            //если у пользователя нет прав, то произойдет исключение
            var clientsListWindow = new ClientsList()
            clientsListWindow.show();
        } catch (ex) {
            //вот здесь нужно пользователю показать, что у него нет прав на выполнение
            alert("Нет доступа");
        }
}//GEN-LAST:event_ClientsInformationActionPerformed

function WorkersInformationActionPerformed(evt) {//GEN-FIRST:event_WorkersInformationActionPerformed
        try {
            //доступ к другому модулю имеют только пользователи группы admin
            //если у пользователя нет прав, то произойдет исключение
            var workersListWindow = new WorkersList()
            workersListWindow.show();
        } catch (ex) {
            //вот здесь нужно пользователю показать, что у него нет прав на выполнение
            alert("Нет доступа");
        }
}//GEN-LAST:event_WorkersInformationActionPerformed

function ServiceInformationActionPerformed(evt) {//GEN-FIRST:event_ServiceInformationActionPerformed
	try {
            //доступ к другому модулю имеют только пользователи группы admin
            //если у пользователя нет прав, то произойдет исключение
            var servWindow = new Serv()
           servWindow.show();
        } catch (ex) {
            //вот здесь нужно пользователю показать, что у него нет прав на выполнение
            alert("Нет доступа");
        }

}//GEN-LAST:event_ServiceInformationActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	//var ServiceListWindow = new ServiceList();
       // ServiceListWindow.showModal();
       try {
            var ServiceListWindow = new ServiceList();
            ServiceListWindow.show();
        } catch (ex) {
            alert("Нет доступа");
        }
}//GEN-LAST:event_buttonActionPerformed

    function LogoutActionPerformed(evt) {//GEN-FIRST:event_LogoutActionPerformed
        logout();
    }//GEN-LAST:event_LogoutActionPerformed
}
